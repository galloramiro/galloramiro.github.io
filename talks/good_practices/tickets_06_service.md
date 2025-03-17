# Service

# Service | Create class with dependencies
## Description
This would be the calss in charge of saving all the logic around how we are gonna use each of the classes build in this project. Each method should be like a text that you can read and understand what's happening inside.
For this work we would have as dependencies in the `__init__` each class and we should use them as private attribute of the class with the `_` at the begining. 
Also this class would have the following public methods:
- generate_monthly_habits_and_titles_data_by_month
- show_full_habits_and_health_charts
- show_tiltes_by_day
- show_titles_by_week
- show_titles_by_month

## Acceptance Criteria
- Class with `__init__` with all the dependencies
- Each class as a `_` private attribute
- Each public method created with a `NotImplementedError`

## Info and Links
- [Client]()
- [DataProcessor]()
- [Repository]()
- [GraphicTool]()

# Service | Implement `generate_monthly_habits_and_titles_data_by_month`  # TODO: FIX TITLE ON GITHUB
## Description
This function would get a month and a year and would generate the data for that month and year.
This should know and manage the posibility of not finding data, and be able to asnwer to that.

To do this work would be using the `Client` to get the data, the `DataProcessor` to process the data and the `Respository` to save the data.

## Acceptance Criteria
- Method implemented
- Good error handling
- Integration tests

## Info and Links
- [Client]()
- [DataProcessor]()
- [Repository]()
- [GraphicTool]()

# Service | Implement `shou_full_habits_and_health_charts`  # TODO: FIX TITLE ON GITHUB
## Description
This function would show the combinations of all the charts for a specific year and month in the following order:
1. Health
2. Positive habits
3. Negative habits

To do this task this function would use the `Repository` to get the data files and the `GraphicTool` to show the charts.

## Acceptance Criteria
- Method implemented
- Good error handling

## Info and Links
- [Repository]()
- [GraphicTool]()

# Service | Implement `show_titles_by_day`  # TODO: FIX TITLE ON GITHUB
## Description
This function should show the titles for a specific day of a month and a year by default current day.
To do this task this function would use the `Repository` to get the data files and the `GraphicTool` to show the charts.

## Acceptance Criteria
- Method implemented
- Good error handling

## Info and Links
- [Repository]()
- [GraphicTool]()

# Service | Implement `show_titles_by_week`  # TODO: FIX TITLE ON GITHUB
## Description
This function should show the titles for a specific week of a month and a year, by default current week.
To do this task this function would use the `Repository` to get the data files and the `GraphicTool` to show the charts.

## Acceptance Criteria
- Method implemented
- Good error handling

## Info and Links
- [Repository]()
- [GraphicTool]()

# Service | Impelement `show_titles_by_month`  # TODO: FIX TITLE ON GITHUB
## Description
This function should show the titles for a specific month and a year, by default current month.
To do this task this function would use the `Repository` to get the data files and the `GraphicTool` to show the charts.

## Acceptance Criteria
- Method implemented
- Good error handling

## Info and Links
- [Repository]()
- [GraphicTool]()
