---
enableMenu: false
title: How do I plan a feature?
author: Ramiro Gallo
---


<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/how_do_i_plan_a_feature/img/conspiracy_theory.gif?raw=true" width="80%">

### Let's see:
### How do I plan a feature {class="fragment"}


--

### What are we gonna cover today?
- Brief recap of the project / feature {class="fragment"}
- Seraching for the different responsabilities {class="fragment"}
- Thinking the work in a non-blocking way {class="fragment"}
- Writing good tickets {class="fragment"}
- Preparing the ground work {class="fragment"}
- Giving visibility and small features to busines {class="fragment"}

---

### Brief recap of the project / feature
- [private_repo](https://github.com/galloramiro/jrnl-scripts) {class="fragment"}
- 3 scripts {class="fragment"}
- base config {class="fragment"}
- runing with `__name__ == "__main__"` {class="fragment"}
- no tests {class="fragment"}
- no separation of concerns {class="fragment"}

--

#### Let's review current script implementation
- [monthly_habits.py](https://github.com/galloramiro/jrnl-habits-tracker/blob/main/examples/scripts/monthly_habits.py) {class="fragment"}
- [monthly_titles.py](https://github.com/galloramiro/jrnl-habits-tracker/blob/main/examples/scripts/monthly_titles.py) {class="fragment"}
- [monthly_views.py](https://github.com/galloramiro/jrnl-habits-tracker/blob/main/examples/scripts/monthly_views.py) {class="fragment"}

--

#### What do we want from this now
- Easy to scale up {class="fragment"}
- Modular {class="fragment"}
- Tested {class="fragment"}

---

### Seraching for the different responsabilities
- Reads data from a source {class="fragment"}
- Manipulate data {class="fragment"}
- Save data {class="fragment"}
- Show's data  {class="fragment"}

---

### Thinking the work in a non-blocking way
- 1 Client class {class="fragment"}
- 1 DataProcessor class {class="fragment"}
- 1 Repository class {class="fragment"}
- 1 Graphic console data {class="fragment"}
- 1 service class to rule them all {class="fragment"}

--
#### Some keys
- Think of different flows {class="fragment"}
- Think what depends on what {class="fragment"}
- [Lets see some examples](https://github.com/users/galloramiro/projects/2) {class="fragment"}

---

### Writing good tickets
- Small but good enought description to give  {class="fragment"}context
- Clear acceptance criteria {class="fragment"}
- Good extra info {class="fragment"}
- Clear dependencies between tickest {class="fragment"}

--

- [Base class ticket](https://github.com/galloramiro/jrnl-habits-tracker/issues/4)
- [Ticket with good info](https://github.com/galloramiro/jrnl-habits-tracker/issues/17) {class="fragment"}
- [Ticket with good examples](https://github.com/galloramiro/jrnl-habits-tracker/issues/21) {class="fragment"}

---

### Preparing the ground work
- [Base classes ready](https://github.com/galloramiro/jrnl-habits-tracker/pulls?q=is%3Apr+is%3Aclosed++create) {class="fragment"}
- [Good data for testing](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples) {class="fragment"}
- Good documentation on the tickets {class="fragment"}

---

### Giving visibility and small features to busines
- [Good roadmap](https://github.com/users/galloramiro/projects/2)

---

### Thanks you

