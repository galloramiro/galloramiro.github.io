---
enableMenu: false
title: Service class A good place to put the bussiness logic
author: Ramiro Gallo
---


<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/service_pattern/img/orchestra.gif?raw=true" width="80%">

### Service class: A good place to put the business logic?


--

### What will we cover today?
- Some real life examples of managing business logic {class="fragment"}
- What are the difficulties with this approaches? {class="fragment"}
- What would be the proposal? {class="fragment"}
- Code examples {class="fragment"}
- Let’s recap some benefits {class="fragment"}
- How we move on into a magnificent future? :O {class="fragment"}


---

### Some real life examples of managing business logic

--

#### Oversized routes
- Business logic {class="fragment"}
- 3rd party services {class="fragment"}
- DB interactions {class="fragment"}
- Error handling {class="fragment"}
- Logging everything {class="fragment"}
 

--

#### Single class
- Business logic
- 3rd party services
- DB interactions
- Error handling
- Logging everything

--

#### Functional approach
- Business logic
- 3rd party services
- DB interactions
- Error handling
- Logging everything
- All separated in functions scattered all over the place! {class="fragment"}

---

### What are the difficulties with these kinds of approaches?
- No single approach, no consistency in code {class="fragment"}
- Working on each service feels like a different way of riding a bike {class="fragment"}
- Difficult to test specific logic without a mix of dependencies involved {class="fragment"}
- Hard to find, isolate and understand the business logic being applied {class="fragment"}

--

#### This turns into difficulties when
- Onboarding new people on the team {class="fragment"}
- Debugging during SEVs {class="fragment"}
- Working when we are not familiar with the specific code {class="fragment"}


---

#### What would be the proposal? 

--

#### Separate the code into different classes with different purposes
- One class to interact with each database object {class="fragment"}
- One class per 3rd party service we need to interact with {class="fragment"}
- Use Single responsibility principle {class="fragment"}
- One class to group them all and to hold the business logic {class="fragment"}

--

#### Use good practices
- Dependency injection {class="fragment"}
- Single responsibility principle {class="fragment"}
- Client pattern {class="fragment"}
- Repository pattern {class="fragment"}
- Write understandable names for functions {class="fragment"}

--

<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/service_pattern/img/one_ring_to_rule_them_all.gif?raw=true" width="100%">

--

#### Some extra tips
- Use single public function for the principal action {class="fragment"}
- If the build of the class is too complex use a factory method  {class="fragment"}
- Delegate complexity in sub private functions {class="fragment"}
- Each class should have their own unit test file {class="fragment"}
- Use test as a way of documenting the code {class="fragment"}
- Don’t abuse the patterns they are no silver bullet {class="fragment"}
- Be happy! {class="fragment"}

--

<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/service_pattern/img/minions_yay.gif?raw=true" width="80%">

---

### Code examples 

<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/service_pattern/img/classes_interaction.png?raw=true" width="80%">

--

### Service
```python
from src.speed_test_client import SpeedTestClient, Server
from src.speed_test_parser import SpeedTestParser
from src.config import LOGGER
from src.speed_test_json_repository import SpeedTestJsonRepository


class InternetConnectionLogService:
    def __init__(self, client: SpeedTestClient, parser: SpeedTestParser, repository: SpeedTestJsonRepository):
        self.client = client
        self.parser = parser
        self.repository = repository

    def log_internet_connection_for_single_server(self, server: Server) -> None:
        speed_test_output = self.client.get_speed_test_result(server.server_id)
        parsed_output = self.parser.parse_output(json_output=speed_test_output)
        LOGGER.debug(
            f"Speed test results: {server.server_name}",
            extra=parsed_output.to_dict(),
        )
        self.repository.save_speed_test_output(speed_test_output=parsed_output)

    def log_internet_connection_for_multiple_servers(self, servers: list[Server]) -> None:
        for server in servers:
            self.log_internet_connection_for_single_server(server=server)

    @staticmethod
    def build():
        return InternetConnectionLogService(
            client=SpeedTestClient(),
            parser=SpeedTestParser(),
            repository=SpeedTestJsonRepository(),
        )
```

--

### Client
```python
import subprocess
from dataclasses import dataclass
from typing import Dict
import json

from src.config import LOGGER


@dataclass
class Server:
    server_name: str
    server_id: int


class SpeedTestClient:
    @classmethod
    def get_speed_test_result(cls, server_id: int) -> Dict:
        command = [
            "speedtest",
            "--format=json-pretty",
            "--progress=no",
            "--accept-license",
            "--accept-gdpr",
            f"--server-id={server_id}",
        ]
        try:
            console_output = subprocess.check_output(command, timeout=180)
            return cls.parse_json(console_output=console_output)
        except subprocess.CalledProcessError as exc:
            LOGGER.error("Process error", extra={"server_id": server_id, "exc": str(exc)})
        except subprocess.TimeoutExpired:
            LOGGER.error("Time out error", extra={"server_id": server_id})

    @staticmethod
    def parse_json(console_output: bytes) -> Dict:
        try:
            return json.loads(console_output)
        except ValueError:
            raise subprocess.CalledProcessError

```

--

### Parser
```python
import decimal
from datetime import datetime
from decimal import Decimal
from dataclasses import dataclass, asdict
from typing import Dict


@dataclass
class SpeedTestParsedOutput:
    date: str = ""
    ping_latency: float = 0
    ping_latency_low: float = 0
    ping_latency_high: float = 0
    download_bandwidth: float = 0
    download_jitter: float = 0
    upload_bandwidth: float = 0
    upload_jitter: float = 0
    isp: str = ""
    server_id: int = 0
    server_host: str = ""
    server_name: str = ""
    result_id: str = ""
    result_url: str = ""

    def to_dict(self) -> Dict:
        return asdict(self)


class SpeedTestParser:
    @classmethod
    def parse_output(cls, json_output: Dict) -> SpeedTestParsedOutput:
        server_info = json_output["server"]
        result_info = json_output["result"]

        parsed_output = SpeedTestParsedOutput(
            date=cls._get_current_time(),
            server_id=server_info["id"],
            server_host=server_info["host"],
            server_name=server_info["name"],
            result_id=result_info["id"],
            result_url=result_info["url"],
            isp=json_output["isp"],
        )

        download_info = json_output["download"]
        parsed_output.download_bandwidth = cls._from_bytes_to_megabytes(download_info["bandwidth"])
        parsed_output.download_jitter = download_info["latency"]["jitter"]

        upload_info = json_output["upload"]
        parsed_output.upload_bandwidth = cls._from_bytes_to_megabytes(upload_info["bandwidth"])
        parsed_output.upload_jitter = upload_info["latency"]["jitter"]

        ping_info = json_output["ping"]
        parsed_output.ping_latency = ping_info["latency"]
        parsed_output.ping_latency_low = ping_info["low"]
        parsed_output.ping_latency_high = ping_info["high"]

        return parsed_output

    @staticmethod
    def _from_bytes_to_megabytes(megabits: float) -> float:
        decimal_bytes = Decimal(str(megabits))
        decimal_bits = decimal_bytes * Decimal("8")
        bits_to_megabits_multiplier = Decimal(str((10**-6)))
        decimal_megabits = decimal_bits * bits_to_megabits_multiplier
        rounded_megabits = decimal_megabits.quantize(Decimal(".01"), rounding=decimal.ROUND_DOWN)
        return float(rounded_megabits)

    @staticmethod
    def _get_current_time() -> str:
        current_time = datetime.now()
        str_format = "%Y-%m-%d %H:%M:%S"
        return current_time.strftime(str_format)

```

--

### Repository
```python
import json
from typing import Dict

from src import SpeedTestParsedOutput
from src.config import LOGGER, FILES_DIR


class SpeedTestJsonRepository:
    _FILES_PATH = f"{FILES_DIR}/internet_logs.json"

    @classmethod
    def save_speed_test_output(cls, speed_test_output: SpeedTestParsedOutput) -> bool:
        try:
            dict_output = speed_test_output.to_dict()
            LOGGER.debug("Start saveing process", extra={"speed_test_output": dict_output})

            LOGGER.debug("Obtaining current file")
            current_file = cls._get_current_file()

            LOGGER.debug("Updating current file", extra={"current_file_lenght": len(current_file)})
            current_file["logs"].append(dict_output)

            LOGGER.debug("Saving new file", extra={"current_file_lenght": len(current_file)})
            cls._save_dict_to_current_file(current_file)
            return True
        except Exception as exc:
            LOGGER.error(f"Failed to update file {str(exc)}")
            return False

    @classmethod
    def _get_current_file(cls) -> Dict:
        with open(cls._FILES_PATH, "r") as file_to_read:
            current_file = json.load(file_to_read)
        return current_file

    @classmethod
    def _save_dict_to_current_file(cls, dict_to_save: Dict):
        with open(cls._FILES_PATH, "w") as file_to_update:
            json.dump(dict_to_save, file_to_update, indent=4)
        return True

```

---

### Let's recap some benefits
- Easy to understand {class="fragment"}
- Easy to implement {class="fragment"}
- Not a lot of layers and layers of code {class="fragment"}
- Easy to test {class="fragment"}
- Easy to document {class="fragment"}

---

### How do we move on into a magnificent future?

--

### Full refactor

<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/service_pattern/img/you_shal_not_pass.gif?raw=true" width="80%">


--

### Start by thinking
- What’s the main responsibilities that this service have? {class="fragment"}
- How can I separate the code into cohesive classes {class="fragment"}
- AGREE WITH YOUR TEAM! {class="fragment"}

--

### Start small!
- Move single and small responsibilities at a time
- Build your classes along separate PR’s
- Add unit test to each separate thing that you are doing
- Add integration tests for the full flow


--


### And once you realize it,
### you will be in a much better place {class="fragment"}

<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/service_pattern/img/world_without_lawyers.gif?raw=true" width="80%"> {class="fragment"}


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

