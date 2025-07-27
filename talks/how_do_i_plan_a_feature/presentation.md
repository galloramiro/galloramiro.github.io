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
- [Private repo](https://github.com/galloramiro/jrnl-scripts) {class="fragment"}
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

#### What do we want from this now?
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
- 1 Graphic console tool {class="fragment"}
- 1 Service class to rule them all {class="fragment"}

--

#### Some keys
- Parallel development {class="fragment"}
- Identify dependencies {class="fragment"}
- [Explore examples](https://github.com/users/galloramiro/projects/2) {class="fragment"}

---

### Writing effective tickets
- Concise yet informative descriptions {class="fragment"}
- Clear acceptance criteria {class="fragment"}
- Relevant additional details {class="fragment"}
- Explicit dependencies between tickets {class="fragment"}

--

#### Examples of good tickets
- [Base class ticket](https://github.com/galloramiro/jrnl-habits-tracker/issues/4) {class="fragment"}
- [Well-documented ticket](https://github.com/galloramiro/jrnl-habits-tracker/issues/17) {class="fragment"}
- [Ticket with examples](https://github.com/galloramiro/jrnl-habits-tracker/issues/21) {class="fragment"}

---

### Laying the groundwork
- [Milestone to set up the project](https://github.com/galloramiro/jrnl-habits-tracker/milestone/7?closed=1) {class="fragment"}
- [Base classes implemented](https://github.com/galloramiro/jrnl-habits-tracker/pulls?q=is%3Apr+is%3Aclosed++create) {class="fragment"}
- [Test data prepared](https://github.com/galloramiro/jrnl-habits-tracker/tree/main/examples) {class="fragment"}
- Well-documented tickets {class="fragment"}

---

### Delivering visibility and incremental features to the business
- [Roadmap](https://github.com/users/galloramiro/projects/2)

---

### Key Takeaways
- Break down features into clear responsibilities {class="fragment"}
- Structure work to enable parallel development {class="fragment"}
- Write tickets that tell a story {class="fragment"}
- Build foundational pieces first {class="fragment"}
- Provide regular visibility to stakeholders {class="fragment"}

---

<img src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/fight_against_the_rabbit_hole/img/thank-you.gif?raw=true" width="80%" style="display: block; margin: 0 auto;">

### Thank you!

<div style="text-align: center; margin-top: 20px;">
  <a href="https://github.com/galloramiro" style="margin-right: 10px;">
    <img class="r-frame" src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/fight_against_the_rabbit_hole/img/github.svg?raw=true" width="25" style="background-color:white;" />
  </a>
  <a href="https://www.linkedin.com/in/ramirogallo/" style="margin-right: 10px;">
    <img class="r-frame" src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/fight_against_the_rabbit_hole/img/linked-in.svg?raw=true" width="25" style="background-color:white;" />
  </a>
  <a href="https://www.eurekalabs.io/">
    <img class="r-frame" src="https://github.com/galloramiro/galloramiro.github.io/blob/main/talks/fight_against_the_rabbit_hole/img/eurekalabs.svg?raw=true" width="25" style="background-color:white;" />
  </a>
</div>

