---
theme: night
enableMenu: false
title: ArmoniBot building something for my self, but in a sustainable way
author: Ramiro Gallo
---

## ArmoniBot:
### bulding something for my self, but in a sustainable way

--

### What are we gonna cover today?
- A little about me {class="fragment"}
- How armoniBot was born {class="fragment"}
- How do I imagine it?  {class="fragment"}
- How do I split and organize the work and why {class="fragment"}
- What problems did I find and what did I do? {class="fragment"}

---

### A little about me 

<img src="/img/padawan.jpg" width="60%">

--

- Ramiro Gallo
- Play with python since 2016 {class="fragment"}
- Working full time with python since 2019 {class="fragment"}
- Technical Lead in Eureka Labs {class="fragment"}

---

### How armoniBot was born

<img src="/img/togepi.gif" width="70%">

--

### Where your ideas come from?

--

- Curiosity 
- Wanting to automate things {class="fragment"}
- Wanting to better understand something {class="fragment"}
- From a lot of over the place ideas  {class="fragment"}

---

### How do I imagine it? 

<img src="/img/imagination.gif" width="70%">

--

I imagine a bot that can give me:
- The corret harmonica tone for play a song {class="fragment"}
- The penthatonic of any tone {class="fragment"}
- An image with a song if I send the notes {class="fragment"}

---

### How do I split the work 

<img src="/img/explaining-jack-black.png" width="70%">

--

### Do you think what's the more convinient way to split the work?

--

#### One key of being able to daily enjoy works is learn how to be good with our future selves

--

Soo... I ask my self

- What are the key part and features of a bot like this? {class="fragment"}
- No mutch thinking {class="fragment"}
- No design patterns {class="fragment"}
- No best practices {class="fragment"}
- Just free writing in a .md file {class="fragment"}

--

<img src="/img/a-few-moments-latter.gif" width="100%">

--

- I have 7 tasks to build my v 0.1
- I satart writing issues for each one {class="fragment"}
- Each issue should have {class="fragment"}
  - Description {class="fragment"}
  - Acceptance criteria {class="fragment"}
  - Utils {class="fragment"}

---

### Starting from scratch?
- [Python template](https://github.com/galloramiro/python-template) {class="fragment"}
- DockerFile {class="fragment"}
- pyproject.toml {class="fragment"}
- Makefile {class="fragment"}
- Logging config {class="fragment"}
- .env.template {class="fragment"}

---

### Issue 1 Create a  Telegram Bot

```md
## Create a  Telegram Bot
We need a Telegram Bot redy to by used.

### AC
- Bot with hello command 
- Config file to store the token

### Utils
- [Python Telegram Bot documentation](https://docs.python-telegram-bot.org/en/v21.4/)
- [Python Telegram Example](https://github.com/WinnaZ/PyCampNewbieBot)
```

--

### Some surprise 
- Never made a telegram bot {class="fragment"}
- Tryit to dockerize from start {class="fragment"}
- Didn't work {class="fragment"}
- Give it a few tries {class="fragment"}
- Create an issue for future resolution pointintg to the question I create on the repo {class="fragment"}

--

- [New ticket with tec debdt](https://github.com/galloramiro/armonibot/issues/8)
- [PR](https://github.com/galloramiro/armonibot/pull/9) 

---

## Issue 2
```md
## Create the harmonica object
We need an harmonica object.
This object should contain the following layers of information:
- Slot number
- Slot note in American notation
- Slot note in Latin notation

### Utils
- [Harmonica notes](https://www.harmonica.com/bending-tool/)
- [Eng vs Latin notation](https://creatumusica.art/2022/02/25/como-leer-el-cifrado-americano/)
```

--

### Some surprise 
- How can I show this in a good way with out overingeering the thing? {class="fragment"}
- Would be easier to do this on a dict? {class="fragment"}
- Should I use a proper class? {class="fragment"}
- A dataclass would be ok? {class="fragment"}
- It's really matter all this back anf forward? {class="fragment"}
- End up forggoting some things and need a 2nd PR to fix {class="fragment"}

--

- [PR](https://github.com/galloramiro/armonibot/pull/11)
- [PR](https://github.com/galloramiro/armonibot/pull/12) 

---


## Issue 3
```md
## Persisting the harmonicas data
Wee need a good way to persist the harmonica objects.

### AC
- Implement a way to persist the data
- Leave one harmonica tone as example 
- Implement a way to transform that data into the harmonica object develop in #2  

### Utils
- [Harmonica notes for each entonation](https://www.harmonica.com/bending-tool/)
```

--

### Some surprise 
- Create a simple json with 2 harmonicas for testing porpouses {class="fragment"}
- Remember the network problem on the first issue? {class="fragment"}
- Creating a docker-compose the thing {class="fragment"}
- Create the first tests {class="fragment"}

--

- [PR](https://github.com/galloramiro/armonibot/pull/13) 

---


## Issue 4
```md
## Load all the harmonica tones
Using the feature develop in #3 we need to store all the harmonica tones

### AC
- A tone loaded
- B tone loaded 
- C tone loaded
- D tone loaded 
- E tone loaded
- F tone loaded 
- G tone loaded 

### Utils
- [Harmonica notes for each entonation](https://www.harmonica.com/bending-tool/)
```

--

### Some surprise 
- Do I need this right now? {class="fragment"}
- It's more important to advance with the features thatn the data {class="fragment"}

---

## Issue 5
```md
## Showing the harmonica
In this POC we are gonna start by showing the harmonica in plain text.
This would be upgraded on a future version to be more phone friendly.

This function should take a note in american notation and return the object with all the notes.

### AC
- A way to print harmonica with all the notes
- Functionality connected to a telegram bot command

### Utils
- [Example of a conversation bot](https://docs.python-telegram-bot.org/en/v21.4/examples.conversationbot.html)
```

--

### Some surprise 
- How can I show this thing? {class="fragment"}
- Would be equaly shown on console that on telegram? {class="fragment"}
- How this would work? {class="fragment"}
- Wasn't perfect, but acceptable for v0.1 {class="fragment"}

--

- [PR](https://github.com/galloramiro/armonibot/pull/14) 

---

## Issue 6
```md
## Getting the correct harmonica for the base tone of a song
Given a song tone in american notation we should return the harmonica tone, in american notation, that we should use to play that song.

### AC
- Given a tone return the correct harmonica tone to use 

### Utils
- [Harmonica theory, the circle of 5](https://www.harmonica.com/harmonica-keys-for-beginners/) 
```

--

### Some surprise 
- How do I translate the theory to code? {class="fragment"}
- How do I test this if it's on a command and need telegram objects? {class="fragment"}
- Do I wanna mock all the things right now? {class="fragment"}

--

- [PR](https://github.com/galloramiro/armonibot/pull/17) 

---


### What are the benefits of working like this? 

- You cand reproduce this in a no brainer way {class="fragment"}
- lot's of small easy and rewarding steps {class="fragment"}
- Felxibility to change in the middle {class="fragment"}
- Dealing with only one problem at a time {class="fragment"}

---

<img src="/img/thank-you.gif" width="80%" style="display: block; margin: 0 auto;">

<div style="text-align: center; margin-top: 20px;">
  <a href="https://github.com/galloramiro" style="margin-right: 10px;">
    <img class="r-frame" src="/img/github.svg" width="25" style="background-color:white;" />
  </a>
  <a href="https://www.linkedin.com/in/ramirogallo/" style="margin-right: 10px;">
    <img class="r-frame" src="/img/linked-in.svg" width="25" style="background-color:white;" />
  </a>
  <a href="https://www.eurekalabs.io/">
    <img class="r-frame" src="/img/eurekalabs.svg" width="25" style="background-color:white;" />
  </a>
</div>