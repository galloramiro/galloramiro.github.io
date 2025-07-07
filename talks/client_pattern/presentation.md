---
enableMenu: false
title: Why use a Client class to interact with 3rd party services
author: Ramiro Gallo
---


<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/client_pattern/img/robot_in_warehouse.gif?raw=true" width="80%">

### Why use a client class to interact with 3rd party services


--

### What will we cover today?
- What is a client{class="fragment"}
- What are the advantages of using it {class="fragment"}
- What are the disadvantages of not using it{class="fragment"}
- How is it look's like {class="fragment"}
- What and how to test it {class="fragment"}
- What to log {class="fragment"}
- How to handle errors {class="fragment"}

---

### What is a client
The class that would manage all the logic and interactions with a 3rd party service.

--

#### This class idealy should:
- Receive the less amount of parameters as possible 
{class="fragment"}
- Return a base python object (list, dict, int, bool, etc) or a pydantic model if we want {class="fragment"}
- Abstract all the logic that belong to the services, as log in, getting tokens, etc {class="fragment"}
- Have contract testing {class="fragment"}

---

### What are the advantages of using it
- Group logic to interact with the service {class="fragment"}
- Clear separation of the business logic to this 3rd party service interaction logic {class="fragment"}
- Capacity to be moved into another project quickly and without pain {class="fragment"}
- Capacity to transform this into a package {class="fragment"}
- Be easily replace in case it is needed {class="fragment"}
- Maintainable with only 2 files: the class and the contract test one {class="fragment"}

--

#### More advantages
- Easy to mock {class="fragment"}
- Secrets and env variables in one place only {class="fragment"}
- One place, and one way of logging the interaction {class="fragment"}
- Move all the calls from sync to async? change the base gateway and some little things and its solved {class="fragment"}
- Specific error handling {class="fragment"}

--

#### Remember
If you manage to fulfill all, or some of the points up there, you would be able to enjoy some of the following things:

---

### What are the disadvantages of not using it
- Lonely functions in different places and in utils files {class="fragment"}
- Mix business logic with service interaction logic {class="fragment"}
- Not easy to move {class="fragment"}
- Repeated variables and code {class="fragment"}
- Move all calls from sync to async? find all the usage of request and be prepared to get your hands dirty {class="fragment"}
- Lovely to maintain {class="fragment"}

---

### How this looks like?
- Base class {class="fragment"}
- One implementation {class="fragment"}
- Unit tests {class="fragment"}
- Contract tests {class="fragment"}

--

### Base class
```python
import time
from typing import Any, Tuple, Union

import aiohttp
from aiohttp import ClientTimeout, ContentTypeError

from .config import LOGGER


class BaseClient:  # pragma: no cover
    """
    Base Client class to be extended by all other API client
    """

    @staticmethod
    async def _make_request(method, headers, url, **kwargs: Any) -> Tuple[int, Union[dict, str]]:
        """
        Wrapper to make http request.
        """
        start_time = time.time()
        LOGGER.debug("Sending request", extra={"method": method, "url": url, "params": kwargs})
        async with aiohttp.ClientSession(timeout=ClientTimeout(total=60)) as session:
            async with session.request(method=method, headers=headers, url=url, **kwargs) as resp:
                LOGGER.debug(
                    'Received response',
                    extra={
                        'url': url,
                        'status code': resp.status,
                        'durationMs': int((time.time() - start_time) * 1000)
                    }
                )
                try:
                    return resp.status, await resp.json()
                except ContentTypeError:
                    return resp.status, await resp.text()

    @classmethod
    async def get(cls, url, headers=None, **kwargs: Any) -> Tuple[int, dict]:
        return await cls._make_request(method='GET', headers=headers, url=url, **kwargs)

    @classmethod
    async def post(cls, url, headers=None, **kwargs: Any) -> Tuple[int, dict]:
        return await cls._make_request(method='POST', headers=headers, url=url, **kwargs)

    @classmethod
    async def put(cls, url, headers=None, **kwargs: Any) -> Tuple[int, dict]:
        return await cls._make_request(method='PUT', headers=headers, url=url, **kwargs)

    @classmethod
    async def delete(cls, url, headers=None, **kwargs: Any) -> Tuple[int, dict]:
        return await cls._make_request(method='DELETE', headers=headers, url=url, **kwargs)

```

--

### Implementation class
```python
from typing import Dict

from src.base_client import BaseClient
from src.config import ALPHA_URL, ALPHA_API_KEY

class AlphaVantageClient(BaseClient):
    _BASE_URL = f'{ALPHA_URL}query?'
    _API_KEY = ALPHA_API_KEY

    @classmethod
    async def get_intra_day_values_for_symbol(cls, symbol: str) -> Dict:
        """Get intra day request for a specific symbol

        Args:
            symbol (str): string representing the active symbol excamples
            'FB', 'AAPL', 'MSFT', 'GOOGL', 'AMZN'

        Returns:
            requests.Response: Response with the data for the symbol
        """
        params = dict(
            function='TIME_SERIES_INTRADAY',
            symbol=symbol,
            interval='5min',
            outputsize='compact',
            apikey=cls._API_KEY,
        )
        # TODO: manage error, response code and do proper logging
        status_code, json_response = await cls.get(cls._BASE_URL, params=params)
        return json_response
```

---

### How do I test things?

--

### Unit tests
```python
Create this ones base on this:
@pytest.mark.asyncio
@patch("src.client.base_client.BaseClient.get", new_callable=AsyncMock)
async def test_get_intra_day_values_for_symbol_happy_path(mock_get):
    # GIVEN
    api_response = {
        "Meta Data": {
            "1. Information": "Intraday (5min) open, high, low, close prices and volume",
            "2. Symbol": "IBM",
            "3. Last Refreshed": "2025-07-03 17:00:00",
            "4. Interval": "5min",
            "5. Output Size": "Compact",
            "6. Time Zone": "US/Eastern"
        },
        "Time Series (5min)": {
            "2025-07-03 17:00:00": {
                "1. open": "291.9700",
                "2. high": "291.9700",
                "3. low": "291.9700",
                "4. close": "291.9700",
                "5. volume": "309839"
            },
            "2025-07-03 16:55:00": {
                "1. open": "291.5200",
                "2. high": "291.9500",
                "3. low": "291.5100",
                "4. close": "291.5100",
                "5. volume": "65"
            }
        }
    }
    mock_get.return_value = 200, api_response

    # WHEN
    json_response = await AlphaVantageClient.get_intra_day_values_for_symbol(symbol='IBM')

    # THEN
    
    query_params = "function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=compact&apikey=MOCK_API_KEY"
    expected_call = {
        url=f"https://www.alphavantage.co/query?{query_params}"
    }
    assert mock_get.assert_called_once_with(expected_call)
```

--

### Contract tests
```python
@pytest.mark.asyncio
async def test_alpha_vantage_contract_with_correct_symbol():
    # WHEN
    json_response = await AlphaVantageClient.get_intra_day_values_for_symbol(symbol='AMZN')

    # THEN
    time_series_key = 'Time Series (5min)'
    expected_keys = ['Meta Data', time_series_key]
    assert  list(json_response.keys()) == expected_keys

    first_time_series_key = list(json_response[time_series_key].keys())[0]
    first_time_series = json_response[time_series_key][first_time_series_key]
    expected_time_series_keys = ['1. open', '2. high', '3. low', '4. close', '5. volume']

    assert list(first_time_series.keys()) == expected_time_series_keys
```

---

<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/fight_against_the_rabbit_hole/img/thank-you.gif?raw=true" width="80%" style="display: block; margin: 0 auto;">

<div style="text-align: center; margin-top: 20px;">
  <a href="https://github.com/galloramiro" style="margin-right: 10px;">
    <img class="r-frame" src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/fight_against_the_rabbit_hole/img/github.svg?raw=true" width="25" style="background-color:white;" />
  </a>
  <a href="https://www.linkedin.com/in/ramirogallo/" style="margin-right: 10px;">
    <img class="r-frame" src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/fight_against_the_rabbit_hole/img/linked-in.svg?raw=true" width="25" style="background-color:white;" />
  </a>
  <a href="https://www.eurekalabs.io/">
    <img class="r-frame" src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/fight_against_the_rabbit_hole/img/eurekalabs.svg?raw=true" width="25" style="background-color:white;" />
  </a>
</div>

