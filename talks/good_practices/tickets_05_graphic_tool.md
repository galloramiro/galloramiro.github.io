# ConsoleGraphicTool

## ConsoleGraphicTool | Create base class and install dependencies
### Description
The main idea of this class is to work with console graphics that we are gonna do.
For this we would use [pandas](https://pandas.pydata.org/) to manipulate the csv files.
This class would also need [NerdFonts](https://www.nerdfonts.com/) to use different symbols on the console.

The symbols that this class would use are:
- `blank_check`
- `completed_check`
- `sleep`
- `humor`
- `stress`

Lastly this class would contain at least 7 methods:
- `_generate_days_line`
- `generate_positive_habits_graph`
- `generate_negative_habits_graph`
- `generate_health_graph`
- `generate_day_titles_graph`
- `generate_week_titles_graph`
- `generate_month_titles_graph`

### Acceptance Criteria
- Dependencies installed
- Class with symbols as class attributes
- Each base method with a `NotImplementedError`

### Info and Links
- [pandas](https://pandas.pydata.org/) 
- [NerdFonts](https://www.nerdfonts.com/)
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphic_tool)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #4

## ConsoleGraphicTool | Implement `_generate_days_line`
### Description
This method would be the one in charge of drawing the first line of days based on the first and last day of the month.
The output should be a line with numbers from 1 to the last day of the month and a space on the left side. The single digit numbers should be zero padded.

### Acceptance Criteria
- string line with days of the month
- zero padded single digit numbers
- single space between numbers

### Example image
![Image](https://github.com/user-attachments/assets/477d161b-c369-4bba-8268-1d2726c6031f)

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphic_tool)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #18

## ConsoleGraphicTool | Implement `generate_positive_habits_graph`
### Description
This function would leverage the `_generate_days_line` to create a line for each positive habit and graph if the habit was made or not that day.
For this task we would also leverage the class attributes like `blank_check` and `completed_check` to print nicer things.

### Acceptance Criteria
- Each habit should have the checks on the days
- One line per habit

### Example image
![Image](https://github.com/user-attachments/assets/477d161b-c369-4bba-8268-1d2726c6031f)

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphic_tool)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #18

## ConsoleGraphicTool | Implement `generate_negative_habits_graph`
### Description
This function would leverage the `_generate_days_line` to create a line for each negative habit and graph if the habit was made or not that day.
For this task we would also leverage the class attributes like `blank_check` and `completed_check` to print nicer things.

### Acceptance Criteria
- Each habit should have the checks on the days
- One line per habit

### Example image
![Image](https://github.com/user-attachments/assets/477d161b-c369-4bba-8268-1d2726c6031f)

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphic_tool)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #18

## ConsoleGraphicTool | Implement `generate_health_graph`
### Description
This function would leverage the `_generate_days_line` to create a line for each health record and graph if there is a record for that day.
For this task we would also leverage the class attributes like `sleep`, `stress` and `humor` to print nicer things.

### Acceptance Criteria
- Each health record should have the checks on the days
- One line per health record

### Example image
![Image](https://github.com/user-attachments/assets/477d161b-c369-4bba-8268-1d2726c6031f)

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphic_tool)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #18


## ConsoleGraphicTool | Implement `generate_day_titles_graph`
### Description
This would be the simplest one of the 3, the idea would be to show all the titles for one specific day.
If you find a nice way to do that that's a plus, but just printing them would be good.

### Acceptance Criteria
- Titles for the day printed

### Example image
![Image](https://github.com/user-attachments/assets/c343505f-f147-48f8-8798-924b324d2608)

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphic_tool)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #18

## ConsoleGraphicTool | Implement `generate_week_titles_graph`
### Description
This gets more difficult, the idea would be to be able to print all the titles for the 7 days of a week on a single screen and in a nice way.
For this one I don't have examples or ideas, and take into account that some titles can be longer than others.

### Acceptance Criteria
- Titles for each day for a week period
- Date of the day to indicate what day the titles belong 

### Example image
![Image](https://github.com/user-attachments/assets/c343505f-f147-48f8-8798-924b324d2608)

### Info and Links
- [Place to Work On](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/src/graphic_tool)
- [Example Data](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/jrnl-dir)
- [Example Scripts](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples/scripts)

### Dependencies
- #18

## ConsoleGraphicTool | Create a function that is capable of printing the titles of a month
### Description

### Acceptance Criteria

### Info and Links
