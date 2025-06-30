# Client
## Client | Create Base Class with Basic Configurations Around Paths and So On
### Description
This class is responsible for retrieving data from the journal. It should access a configurable route on the machine using this script. This variable needs to be in the config file and imported into this class as a private attribute. The class must include method names to be developed and the first method implemented, which will find the correct folder by month of the current year and return all the files' absolute paths.

### Acceptance Criteria
- `LocalClient` class created.
- Configurable `_JRNL_DIR` private variable added.
- `_get_file_path_by_month` method implemented and tested.
- `get_jrnl_files_path_by_month` method with `NotImplemented` error.
- `get_monthly_habits_by_month` method with `NotImplemented` error.
- `get_monthly_habits_files_paths_by_year` method with `NotImplemented` error.
- `get_monthly_titles_by_month` method with `NotImplemented` error.
- `get_monthly_titles_files_paths_by_year` method with `NotImplemented` error.

- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #2

## Client | Implement get_jrnl_files_path_by_month
### Description
This function retrieves all the absolute paths for journal files, excluding monthly titles and habits. The files are `.txt` files, and naming conventions can be used to filter out irrelevant files. The function should not open all files at once but delegate this to services that handle it in combination with other tools.

### Acceptance Criteria
- `get_jrnl_files_path_by_month` function implemented.
- Test cases for the happy path.
- Custom error for not finding any files.
- Tests for raising the custom error.

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #4 

## Client | Implement get_monthly_habits_by_month
### Description
This function retrieves the `monthly_habits.csv` file for the given month. It is a straightforward function with no significant complexities.

### Acceptance Criteria
- `get_monthly_habits_by_month` function implemented.
- Unit tests written.
- Custom error for not finding any file.
- Tests for raising the custom error.

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #4 

## Client | Implement get_monthly_habits_files_paths_by_year
### Description
This function returns the absolute paths for each `monthly_habits.csv` file for the year. It should not return all files' data in memory but leave it to the service to handle.

### Acceptance Criteria
- `get_monthly_habits_files_paths_by_year` function implemented.
- Test cases for the happy path.
- Test cases for missing files.
- Custom error for not finding any files.
- Tests for raising the custom error.

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #4 

## Client | Implement get_monthly_titles_by_month
### Description
This function retrieves the `monthly_titles.csv` file for the given month. It is a straightforward function with no significant complexities.

### Acceptance Criteria
- `get_monthly_titles_by_month` function implemented.
- Unit tests written.
- Custom error for not finding any file.
- Tests for raising the custom error.

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #4

## Client | Implement get_monthly_titles_files_paths_by_year
### Description
This function returns the absolute paths for each `monthly_titles.csv` file for the year. It should not return all files' data in memory but leave it to the service to handle.

### Acceptance Criteria
- `get_monthly_titles_files_paths_by_year` function implemented.
- Test cases for the happy path.
- Test cases for missing files.
- Custom error for not finding any files.
- Tests for raising the custom error.

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/client)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #4
