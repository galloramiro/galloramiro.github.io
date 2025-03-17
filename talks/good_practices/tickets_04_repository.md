# Repository
# Repository | Install dependencies  // TODO: REMOVE THIS TICKET FROM PROJECT, WONT DO

# Repository | Create, configure and document CsvRepository class  // TODO: FIX TITLE ON GITHUB
## Description
This would be the class incharge of geting the datacalss that we create and store it as csv files.
The files should live in the folder of the month that the data belongs to. 
The LocalClient class would have a similar implementation on the path laveraging a variable from the config file, you can take inspiration on that.

## Acceptance Criteria
- Class created with some documentation on the porpuse
- `save_monthly_habits_rows` with a `NotImplementedError`
- `save_monthly_titles_rows` with a `NotImplementedError`

## Info and Links
- [LocalClient]()
- [Output files]()

# Repository | Implement save_monthly_habits_rows // TODO: FIX TITLE ON GITHUB
## Description
We need receive a list of MonthlyHabitsRow and we need to save the data into a CSV file.
For this we can laverage the built in libraty of python, it's a quick save.

The particularity of this function would be holding the poroper naming for the file, and the proper place.
The name should be `monthly_habits_data.csv` and should be saved on the folder that the data comming belongs.

## Acceptance Criteria
- `save_monthly_habits_rows` implemented
- Custom error
- tests

## Info and Links
- [Output]()
- [MonthlyHabitsRow]()

# Repository | Implement save_monthly_titles_rows // TODO: FIX TITLE ON GITHUB
## Description
We need receive a list of MonthlyTitlesRow and we need to save the data into a CSV file.
For this we can laverage the built in libraty of python, it's a quick save.

The particularity of this function would be holding the poroper naming for the file, and the proper place.
The name should be `monthly_titles_data.csv` and should be saved on the folder that the data comming belongs.

## Acceptance Criteria
- `save_monthly_titles_rows` implemented
- Custom error
- tests

## Info and Links
- [Output]()
- [MonthlyTitlesRow]()

