# Repository

## Repository | Create, configure and document CsvRepository class
### Description
This would be the class in charge of getting the dataclass that we create and store it as CSV files. The files should live in the folder of the month that the data belongs to. The `LocalClient` class would have a similar implementation on the path leveraging a variable from the config file, you can take inspiration on that.

### Acceptance Criteria
- Class created with some documentation on the purpose
- `save_monthly_habits_rows` with a `NotImplementedError`
- `save_monthly_titles_rows` with a `NotImplementedError`

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/repository)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)
- [LocalClient](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)

## Repository | Implement save_monthly_habits_rows
### Description
We need to receive a list of MonthlyHabitsRow and we need to save the data into a CSV file. For this, we can leverage the built-in library of Python, it's a quick save.

The particularity of this function would be holding the proper naming for the file, and the proper place. The name should be `monthly_habits_data.csv` and should be saved in the folder that the data coming belongs.

### Acceptance Criteria
- `save_monthly_habits_rows` implemented
- Custom error
- tests

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/repository)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)
- [LocalClient](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)

### Dependencies
- #14
- #11

## Repository | Implement save_monthly_titles_rows
### Description
We need to receive a list of MonthlyTitlesRow and we need to save the data into a CSV file. For this, we can leverage the built-in library of Python, it's a quick save.

The particularity of this function would be holding the proper naming for the file, and the proper place. The name should be `monthly_titles_data.csv` and should be saved in the folder that the data coming belongs.

### Acceptance Criteria
- `save_monthly_titles_rows` implemented
- Custom error
- tests


### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/repository)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)
- [LocalClient](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)

### Dependencies
- #14
- #11
