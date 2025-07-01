---
enableMenu: false
title: How do I plan a feature?
author: Ramiro Gallo
---


<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/how_do_i_plan_a_feature/img/conspiracy_theory.gif?raw=true" width="80%">

### Let's explore:
### How do I plan a feature? {class="fragment"}


--

### What will we cover today?
- Quick overview of the project/feature {class="fragment"}
- Identifying key responsibilities {class="fragment"}
- Structuring work to avoid bottlenecks {class="fragment"}
- Writing effective tickets {class="fragment"}
- Laying the groundwork {class="fragment"}
- Delivering visibility and incremental features to the business {class="fragment"}

---

### Quick overview of the project/feature
- [private_repo](https://github.com/galloramiro/jrnl-scripts) {class="fragment"}
- 3 scripts {class="fragment"}
- Base configuration {class="fragment"}
- Runs with `__name__ == "__main__"` {class="fragment"}
- No tests {class="fragment"}
- Lack of separation of concerns {class="fragment"}

--

#### Let's review current script implementation
- [monthly_habits.py](https://github.com/galloramiro/jrnl-habits-tracker/blob/main/examples/scripts/monthly_habits.py) {class="fragment"}
- [monthly_titles.py](https://github.com/galloramiro/jrnl-habits-tracker/blob/main/examples/scripts/monthly_titles.py) {class="fragment"}
- [monthly_views.py](https://github.com/galloramiro/jrnl-habits-tracker/blob/main/examples/scripts/monthly_views.py) {class="fragment"}

--

#### What do we want from this now
- Scalability {class="fragment"}
- Modularity {class="fragment"}
- Comprehensive testing {class="fragment"}

---

### Identifying key responsibilities
- Reading data from a source {class="fragment"}
- Processing/manipulating data {class="fragment"}
- Storing data {class="fragment"}
- Displaying data  {class="fragment"}

---

### Structuring work to avoid bottlenecks
- 1 Client class {class="fragment"}
- 1 DataProcessor class {class="fragment"}
- 1 Repository class {class="fragment"}
- 1 Graphic console data {class="fragment"}
- 1 Service class to rule them all {class="fragment"}

--

#### Some keys
- Displaying data {class="fragment"}
- Identify dependencies {class="fragment"}
- [Explore examples](https://github.com/users/galloramiro/projects/2) {class="fragment"}

---

### Writing effective tickets
- Concise yet informative descriptions  {class="fragment"}context
- Clear acceptance criteria {class="fragment"}
- Relevant additional details {class="fragment"}
- Explicit dependencies between tickets {class="fragment"}

--

- [Base class ticket](https://github.com/galloramiro/jrnl-habits-tracker/issues/4)
- [Well-documented ticket](https://github.com/galloramiro/jrnl-habits-tracker/issues/17) {class="fragment"}
- [Ticket with examples](https://github.com/galloramiro/jrnl-habits-tracker/issues/21) {class="fragment"}

---

### Laying the groundwork
- [Milestone to set up the project](https://github.com/galloramiro/jrnl-habits-tracker/milestone/7?closed=1)
- [Base classes implemented](https://github.com/galloramiro/jrnl-habits-tracker/pulls?q=is%3Apr+is%3Aclosed++create) {class="fragment"}
- [Test data prepared](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples) {class="fragment"}
- Well-documented tickets {class="fragment"}

---

### Delivering visibility and incremental features to the business
- [Roadmap](https://github.com/users/galloramiro/projects/2)

---

### Thank you!

