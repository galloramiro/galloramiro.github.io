# DataProcessor

## DataProcessor | Create base class
### Description
This would be the class in charge of creating the data base on the information that we get from the jrnl. In order to accomplish this, we are going to leverage different points of information that we are going to call tags. Each tag would have an initial tag and an end tag, and we are going to express this as different attributes that contain sets for the starting and the end tag. This could be configurable, but it's not something that we are going to try to achieve in this POC. In order to understand how these tags are working, search for testing data that would help you. The tags would be something similar to:
- HEALTH_TAGS = ("@Health", "@PositiveHabits")
- POSITIVE_HABITS_TAGS = ("@PositiveHabits", "@NegativeHabits")
- NEGATIVE_HABITS_TAGS = ("@NegativeHabits", "@ConvictConditioning")
- CONVICT_CONDITIONING_TAGS = ("@ConvictConditioning", "@DailyTasks")
- JOURNAL_TAG = ("@Journaling", "")

We also need to leave the base functions with a `NotImplementedError`, this would help people being able to work minimizing conflicts.

### Acceptance Criteria
- Base class
- Documentation on the class
- `generate_monthly_titles_rows` with `NotImplementedError`
- `generate_monthly_habits_rows` with `NotImplementedError`
- Documentation on the functions

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #2 

## DataProcessor | Create the DataClass Row for monthly_habits and monthly_titles
### Description
In order to build the data into CSV and have consistency in the process, we are going to leverage the dataclass objects that Python provides. Both processes are similar but create different kinds of data.

For the monthly title we care about:
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

Take into account that the date format would be extracted from the JRNL that uses `%Y-%m-%d %I:%M:%S %p`.

### Acceptance Criteria
- Monthly Titles Row
- Monthly Habits Row

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/data_processor)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #2

## DataProcessor | Implement generate_monthly_titles_rows
### Description
In this case, we are going to implement the `generate_monthly_titles_rows`. In order to do this, you would have to deal with a lot of different things. For example, extracting data using the tags, or parsing different parts of the dates, among other things that could be shared with other functions. For these kinds of things, I would recommend using the approach of single responsibility, and a private helper method like `_parse_dates` or `_parse_tags_data`. Also, if you are not the only one working on this service, you should coordinate with the other person in order to not step on each other's feet, and also agree on how to approach these common behaviors.

### Acceptance Criteria
- Main function tested
- Sub functions tested
- Custom error on failed to process data

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/data_processor)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #10
- #11

### Related tickets
- #13 

## DataProcessor | Implement generate_monthly_habits_rows
### Description
In this case, we are going to implement the `generate_monthly_habits_rows`. In order to do this, you would have to deal with a lot of different things. For example, extracting data using the tags, or parsing different parts of the dates, among other things that could be shared with other functions. For these kinds of things, I would recommend using the approach of single responsibility, and a private helper method like `_parse_dates` or `_parse_tags_data`. Also, if you are not the only one working on this service, you should coordinate with the other person in order to not step on each other's feet, and also agree on how to approach these common behaviors.

### Acceptance Criteria
- Main function tested
- Sub functions tested
- Custom errors on failed to process data

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/data_processor)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #10
- #11

### Related tickets
- #13 
