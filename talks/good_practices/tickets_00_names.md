# Tickets for the project

## Project 
- Create project using template
- Create structure
- Add examples of files to use

## Client
- Client | Create base class with basic configurations around paths and so on
- Client | Create function that retrieves files path by month // TODO FIX TITLE ON GITHUB
- Client | Create function that retrieves the monthly habits by month
- Client | Create function that retrieves all the monthly habits by year
- Client | Create function that retrieves the monthly titles by month 
- Client | Create function that retrieves all the monthly titles by year

## DataProcessor
- DataProcessor | Create base class
- DataProcessor | Create MonthlyHabits and MonthlyTitles dataclass
- DataProcessor | Create function that processes the monthly habits with proper data class
- DataProcessor | Create function that processes the monthly titles with proper data class

## Repository
- Repository | Install dependencies
- Repository | Create the base class with the path and things
- Repository | Create function that takes a list of rows from monthly habits and saves the file on the correct path
- Repository | Create function that takes a list of rows from titles habits and saves the file on the correct path

## ConsoleGraphicTool
- ConsoleGraphicTool | Create base class and install dependencies
- ConsoleGraphicTool | Create function that is able to generate the line for the days based on the dates on the file
- ConsoleGraphicTool | Create a function that is capable of printing the positive habits
- ConsoleGraphicTool | Create a function that is capable of printing the negative habits
- ConsoleGraphicTool | Create a function that is capable of printing the health info
- ConsoleGraphicTool | Create a function that is capable of printing the titles of the day
- ConsoleGraphicTool | Create a function that is capable of printing the titles of a week
- ConsoleGraphicTool | Create a function that is capable of printing the titles of a month

## Service
- Service | Create class with dependencies
- Service | Create function that creates the raw data for monthly habits and monthly titles
- Service | Create function that shows the positive, negative habits and health info
- Service | Create function that shows the titles for the day
- Service | Create function that shows the titles for the week
- Service | Create function that shows the titles for the month

## CLI
- CLI | Install dependencies
- CLI | Create CLI command for the data processing
- CLI | Create CLI command for showing the positive, negative habits and health info
- CLI | Create CLI command for showing the titles for the day
- CLI | Create CLI command for showing the titles for the week
- CLI | Create CLI command for showing the titles for the month
