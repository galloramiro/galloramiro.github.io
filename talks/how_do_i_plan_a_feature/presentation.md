---
enableMenu: false
title: How do I plan a feature?
author: Ramiro Gallo
---


<img src="{GIF_OF_CONSPIRACY_THEORY_EXPLAINING}" width="70%">

### Let's see:
### How do I plan a feature {class="fragment"}


--

### What are we gonna cover today?
- Brief recap of the project / feature
- Seraching for the different responsabilities
- Thinking the work in a non-blocking way
- Writing good tickets
- Preparing the ground work
- Giving visibility and small features to busines

---

### Brief recap of the project / feature
- [private_repo](https://github.com/galloramiro/jrnl-scripts)
- 3 scripts
- base config
- runing with `__name__ == "__main__"` 
- no tests
- no separation of concerns

--

#### Let's review current script implementation
- [monthly_habits.py](https://github.com/galloramiro/jrnl-habits-tracker/blob/main/examples/scripts/monthly_habits.py)
- [monthly_titles.py](https://github.com/galloramiro/jrnl-habits-tracker/blob/main/examples/scripts/monthly_titles.py)
- [monthly_views.py](https://github.com/galloramiro/jrnl-habits-tracker/blob/main/examples/scripts/monthly_views.py)

--

#### What do we want from this now
- Easy to scale up
- Modular
- Tested

---

### Seraching for the different responsabilities
- Reads data from a source
- Manipulate data
- Save data
- Show's data 

---

### Thinking the work in a non-blocking way
- 1 Client class
- 1 DataProcessor class
- 1 Repository class
- 1 Graphic console data
- 1 service class to rule them all

--

- Think of different flows
- Think what depends on what
- [Lets see some examples](https://github.com/users/galloramiro/projects/2)

---

### Writing good tickets
- Small but good enought description to give context
- Clear acceptance criteria
- Good extra info
- Clear dependencies between tickest

--

- [Base class ticket](https://github.com/galloramiro/jrnl-habits-tracker/issues/4)
- [Ticket with good info](https://github.com/galloramiro/jrnl-habits-tracker/issues/17)
- [Ticket with good examples](https://github.com/galloramiro/jrnl-habits-tracker/issues/21)

---

### Preparing the ground work
- [Base classes ready](https://github.com/galloramiro/jrnl-habits-tracker/pulls?q=is%3Apr+is%3Aclosed++create)
- [Good data for testing](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples)
- Good documentation on the tickets

---

### Giving visibility and small features to busines
- [Good roadmap](https://github.com/users/galloramiro/projects/2)

---

### Thanks you

