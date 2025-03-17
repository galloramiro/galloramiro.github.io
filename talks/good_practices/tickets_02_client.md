# Client
# Client | Create base class with basic configurations around paths and so on
## Description
This would be the class in charge of retriving the data from the jrnl.
In this case we would need a class that can access to a configurable route on the machine using this script. This variable need to be on the config file and imported on this class, and needs to be a private attribute.
Also this class must have the name of the methods to develop and the first method implemented that it's gonna be the one used to find the correct folder by month of the current year and will return all the files absoluthe paths.

## Acceptance Criteria
- LocalClient class
- Configurable `_JRNL_DIR` private variable
- `_get_file_path_by_month` implemented and tested
- `get_jrnl_files_path_by_month` with NotImplementd error
- `get_monthly_habits_by_month` with NotImplementd error
- `get_monthly_habits_files_paths_by_year` with NotImplemented error
- `get_monthly_titles_by_month` with NotImplementd error
- `get_monthly_titles_files_paths_by_year` with NotImplementd error

## Info and Links
- [Gateway documentation]()
- [example data]()

# Client | Create function that retrieves files path by month // TODO FIX TITLE ON GITHUB
## Description
This function would be the one retriving all the absolute path for only the jrnl files, no monthly titles, no monthly habits.
This files would be .txt files, so you can laverage that. If you wanna go above and beyond you can play with the naming convention that jrnls has to avoid having some extra txt that's not what you want.

In this case we would not retreive all the files open at the same time because would not make sense, instead we are gonna delegate this to the services that would choose how to handle this in convination with the other tools.

## Acceptance Criteria
- `get_jrnl_files_path_by_month` implemented 
- test cases of happy path
- custom error for not being able to find  any files
- test for the raising of the error

## Info and Links
- [example data]()
- [place to work on]()

# Client | Create function that retrieves the monthly habits by month
## Description
Here we are gona brint the monthly_habits.csv for the given month.
This is a pretty slim function and with no big intricacies.

## Acceptance Criteria
- `get_monthly_habits_by_month` implementend
- unit tests 
- Custom error for not finding any file
- test for the error raising

## Info and Links
- [example data]()
- [place to work on]()

# Client | Create function that retrieves all the monthly habits by year
## Description
In this case we are gonna follow a similar approach to the `get_jrnl_file_path_by_month` where we are gona only return the absolute path for each file.
Does not make sense to return 12 files full of data on memory, it's better to leave the service to know how to implement and use this.

## Acceptance Criteria
- `get_monthly_habits_files_paths_by_year` implemented
- Test cases for this on happy path
- Test cases for this missing files
- Custom error for not finding any files
- Test on the error raising

## Info and Links
- [example data]()
- [place to work on]()

# Client | Create function that retrieves the monthly titles by month 
## Description
Here we are gona brint the monthly_titles.csv for the given month.
This is a pretty slim function and with no big intricacies.

## Acceptance Criteria
- `get_monthly_titles_by_month` implementend
- unit tests 
- Custom error for not finding any file
- test for the error raising

## Info and Links
- [example data]()
- [place to work on]()

# Client | Create function that retrieves all the monthly titles by year
## Description
In this case we are gonna follow a similar approach to the `get_jrnl_file_path_by_month` where we are gona only return the absolute path for each file.
Does not make sense to return 12 files full of data on memory, it's better to leave the service to know how to implement and use this.

## Acceptance Criteria
- `get_monthly_titles_files_paths_by_year` implemented
- Test cases for this on happy path
- Test cases for this missing files
- Custom error for not finding any files
- Test on the error raising

## Info and Links
- [example data]()
- [place to work on]()
