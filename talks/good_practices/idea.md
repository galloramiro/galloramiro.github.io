# Stop Overengineering: Go Lean, Go Simple, and Grow

## Purpose
The purpose of this work is to create a course that serves as a foundation for any team struggling with legacy code and mixed software designs. It aims to help them implement small changes that will eventually lead to good practices, scalable code, and a unified way of writing code. This is the result of years of work and represents, for me, the balance between no patterns and an excess of patterns that complicate things in the long run. The idea is to teach a way of thinking, problem-solving, and generating quality code that helps us.

I also want to highlight the dangers of acting without this mindset and make visible many things that are often overlooked, such as the difficulty of working from home, building trust, and overcoming impostor syndrome. Additionally, I want to teach how to write tickets, break them into small parts, and think about how to parallelize work, among other things.

## Involved Classes, Best Practices and Topics
- Client
- Repository
- Service
- Custom errors for classes
- Handling errors at the service level
- Good logging practices
- Avoid falling into the rabbit hole
- Learn how to think about a feature, how to write tickets
- Testing
    - Unit tests
    - Integration tests
    - Contract tests
    - API tests
- Making CLI tooling 

## Implementation project
Tools for My Journal

### Minimum Requirements:
- Collection and storage of sleep, stress, and mood data
- Collection and storage of habits
- Collection and storage of titles
- Monthly view of positive habits
- Monthly view of negative habits
- Monthly view of all habits
- Weekly view of titles
- Storage of metrics on GitHub
- Command Line Interface (CLI)

### Nice to Have:
- Writing metrics
- Sleep and other metrics
- Specific habit metrics

### Architecture
- **Client**
    - Manages interaction with JRNL
    - Abstracts interaction with third-party services
    - Can be extended to request anything in the future
- **Data Processor**
    - Error handling
    - ETL (Extract, Transform, Load)
    - Clear, simple, single-responsibility functions
- **Repository**
    - Stores, receives, and returns Python objects
    - Abstracts persistence
    - Can be extended to use a database, JSON, etc., in the future
- **Graphic Tool**
    - Currently prints to the console
    - Can be extended to generate PDFs, images, etc., in the future
- **Service**
    - Contains business logic
    - Orchestrates other classes
    - Uses dependency injection
    - Should be easy to read and understand
    - Data manipulation service
    - Graphic service
- **Scaling**
    - Move to a URL that serves files, change the client
    - Store data in a database, change the repository
    - The service continues to perform the same functions

## Tasks
[GitHub Project Tasks](https://github.com/users/galloramiro/projects/1/views/1)

## Talks
### Executive Overview
- Explain the purpose of the project
- Explain the classes involved
- Explain the best practices and topics
- Explain the implementation project

### Client
- Benefits
- Things to avoid
  - More than 2 layers of dependencies
- Responsibilities of the base class
- Responsibilities of subclasses
- Unit tests
- Integration tests
- Contract tests
- Custom errors
- Logging practices
- Performance metrics
- Ways of improving
    - Sync
    - Async
    - Check DNS resolving
    - Use Kubernetes internal URL
    - Caching
- Single Responsibility
- Open to extension, closed for modification

### Repository Pattern
- Abstract class
- Benefits
- Things to avoid
  - More than 2 layers of dependencies
- Responsibilities of subclasses
- Handling complex models with many joins
- ORM vs Raw SQL, be flexible
- Unit tests
- Integration tests
- Custom errors
- Logging
- Ways of improving
    - Sync
    - Async
    - Manual query optimization
    - Indexes
    - Cron jobs for deleting data
    - Data retention policy
- Single Responsibility

### Service
- Business logic
- Benefits
- Things to avoid
  - More than 2 layers of dependencies
- Should be readable like a recipe
- Handling bulky dependencies
- Error handling
- Unit tests
- Integration tests
- Logging
- Performance measurement
- Single Responsibility
- Dependency injection

### Reason and boundaries of the classes
- Resume explaining the logic behind the classes
- Single responsibility principle
- Open to extension, closed for modification
- Dependency injection
- Avoid too many layers of deepness

### Testing
- Unit tests
- Integration tests
- Contract tests
- Manual tests
- No QA? API tests

### Things to Consider When Writing a Feature
- Be clear on the key features to develop
- Be clear on the MVP (Minimum Viable Product)
- Use visual tools like a timeline or roadmap
- Be clear with dependencies
- Write small and atomic tickets
- Think about how many people can work on a feature simultaneously without conflicts
- Write clear Acceptance Criteria (AC)

### Avoid Falling into the Rabbit Hole
- What is the rabbit hole?
- Preventive measures
- How to get out of the rabbit hole

### Overviews of the implementation project
- Overview of the tasks
- Overview of the architecture
- Overview of each class and the principles behind them

## Output
- Course with 9 different topics
- Multiple videos
- Project to implement
- GitHub project with tasks

