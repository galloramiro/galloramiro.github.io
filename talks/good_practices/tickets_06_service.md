# Service

## Service | Create class with dependencies
### Description
This would be the class in charge of saving all the logic around how we are gonna use each of the classes built in this project. Each method should be like a text that you can read and understand what's happening inside.
For this work, we would have as dependencies in the `__init__` each class and we should use them as private attributes of the class with the `_` at the beginning. 
Also, this class would have the following public methods:
- generate_monthly_habits_and_titles_data_by_month
- show_full_habits_and_health_charts
- show_titles_by_day
- show_titles_by_week
- show_titles_by_month

### Acceptance Criteria
- Class with `__init__` with all the dependencies
- Each class as a `_` private attribute
- Each public method created with a `NotImplementedError`

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/service)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)
- [Client](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [DataProcessor](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/data_processor)
- [Repository](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/repository)
- [GraphicTool](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphi_tool)

### Dependencies
- #18
- #14
- #10
- #4

## Service | Implement `generate_monthly_habits_and_titles_data_by_month`
### Description
This function would get a month and a year and would generate the data for that month and year.
This should know and manage the possibility of not finding data and be able to answer to that.

To do this work, it would use the `Client` to get the data, the `DataProcessor` to process the data, and the `Repository` to save the data.

### Acceptance Criteria
- Method implemented
- Good error handling
- Integration tests

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/service)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)
- [Client](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [DataProcessor](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/data_processor)
- [Repository](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/repository)
- [GraphicTool](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphi_tool)

### Dependencies
- #5
- #12
- #13
- #16 
- #17 

## Service | Implement `show_full_habits_and_health_charts`
### Description
This function would show the combinations of all the charts for a specific year and month in the following order:
1. Health
2. Positive habits
3. Negative habits

To do this task, this function would use the `Repository` to get the data files and the `GraphicTool` to show the charts.

### Acceptance Criteria
- Method implemented
- Good error handling

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/service)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)
- [Client](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [DataProcessor](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/data_processor)
- [Repository](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/repository)
- [GraphicTool](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphi_tool)

### Dependencies
- #6
- #20
- #21
- #22 

## Service | Implement `show_titles_by_day`
### Description
This function should show the titles for a specific day of a month and a year by default current day.
To do this task, this function would use the `Repository` to get the data files and the `GraphicTool` to show the charts.

### Acceptance Criteria
- Method implemented
- Good error handling

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/service)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)
- [Client](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [DataProcessor](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/data_processor)
- [Repository](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/repository)
- [GraphicTool](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphi_tool)

### Dependencies
- #8
- #23 

## Service | Implement `show_titles_by_week`
### Description
This function should show the titles for a specific week of a month and a year, by default current week.
To do this task, this function would use the `Repository` to get the data files and the `GraphicTool` to show the charts.

### Acceptance Criteria
- Method implemented
- Good error handling

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/service)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)
- [Client](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [DataProcessor](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/data_processor)
- [Repository](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/repository)
- [GraphicTool](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphi_tool)

### Dependencies
- #8
- #24

## Service | Implement `show_titles_by_month`
### Description
This function should show the titles for a specific month and a year, by default current month.
To do this task, this function would use the `Repository` to get the data files and the `GraphicTool` to show the charts.

### Acceptance Criteria
- Method implemented
- Good error handling

### Info and Links
- [Repository]()
- [GraphicTool]()
