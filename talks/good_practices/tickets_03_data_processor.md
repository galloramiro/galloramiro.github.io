# DataProcessor

# DataProcessor | Create base class
## Description
This would be the class in charge of creating the data base on the information that we get from the jrnl.
In order to acomplish this we are gonna laverage different points of information that we are gonna call tags.
Each tag would have an initial tag and a end tag, and we are gonna express this as different attributes that contain sets for the starting and the end tag.
This could be configurable, but it's not something that we are gonna try to achieve in this POC.
In order to understand how this tags are working search testing data that would help you
The tags would be something similar to:
- HEALTH_TAGS = ("@Health", "@PositiveHabits")
- POSITIVE_HABITS_TAGS = ("@PositiveHabits", "@NegativeHabits")
- NEGATIVE_HABITS_TAGS = ("@NegativeHabits", "@ConvictConditioning")
- CONVICT_CONDITIONING_TAGS = ("@ConvictConditioning", "@DailyTasks") 
- JOURNAL_TAG = ("@Journaling", "")

We also need to leave the base functionswith a `NotImplementedError`, this would help people being able to work minimizing conflicts.

## Acceptance Criteria
- Base class
- Documentation on the class
- `generate_monthly_titles_rows` with `NotImplementedError`
- `generate_monthly_habits_rows` with `NotImplementedError`
- Documentation on the functions

## Info and Links
- [example jrnl files]()
- [example jrnl outputs]()

# DataProcessor | Create the DataClass Row for monthly_habits and monthly_titles  // TODO: FIX THE TITLE ON GITHUB
## Description
In order to build the data into CSV and have a consistency on the process we are gonna laverage the dataclass objets that python provides.
Both process are similar, but create different kind of data.

For the monthyl title we care about:
- date: str
- title: str
- week_number: int
- weekday_number: int
- month: int
- year: int
- time: str

For the monthly habits we care about:
- date: str
- year: int
- month: int
- day: int
- week_number: int
- description: str
- value: int
- tag: str

Take into account that the date format would be extracted from the JRNL that use `%Y-%m-%d %I:%M:%S %p`

## Acceptance Criteria
- Monthly Titles Row
- Monthly Habits Row

## Info and Links
- [example jrnl files]()
- [example jrnl outputs]()

# DataProcessor | Implement generate_monthly_titles_rows // TODO: FIX TITLE ON GITHUB
## Description
In this case we are gonna implement the `generate_monthly_titles_rows`, in order to do this you would have to deal with a lot of different things.
For example extracting data using the tags, or parsing different parts of the dates, among other things that could be shared with other functions.
For this kind of things I would recoomend using the approach of single responsability, and a private helper method like `_parse_dates` or `_parse_tags_data`.
Also, if you are not the only one working on this service you should coordinate with the other person in order to not setp on each other foots, and also agree on how to approach this common beheiviours. 

## Acceptance Criteria
- Main function tested
- sub functions tested
- Custom error on failed to process data

## Info and Links
- [MonthlyTitlesRow]()
- [related ticket]()
- [example jrnl files]()
- [example jrnl outputs]()

# DataProcessor | Implement generate_monthly_habits_rows  // TODO: FIX TITLE ON GITHUB
## Description
In this case we are gonna implement the `generate_monthly_habits_rows`, in order to do this you would have to deal with a lot of different things.
For example extracting data using the tags, or parsing different parts of the dates, among other things that could be shared with other functions.
For this kind of things I would recoomend using the approach of single responsability, and a private helper method like `_parse_dates` or `_parse_tags_data`.
Also, if you are not the only one working on this service you should coordinate with the other person in order to not setp on each other foots, and also agree on how to approach this common beheiviours. 

## Acceptance Criteria
- Main function tested
- sub functions tested
- Custom errors on failed to process data

## Info and Links
- [MonthlyHabitsRow]()
- [related ticket]()
- [example jrnl files]()
- [example jrnl outputs]()

