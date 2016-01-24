# Node CLI Timer App Lab

In this lab, we'll using `process` and timer functions to build a command-line interface application which take number of second or minutes and counts them down.

## Objectives

1. Implement Node timer app which works from CLI (take time and counts down like a kitchen timer)
1. Implement taking the CLI arguments
1. Implement the async sleep
1. Implement the current coutdown 


## Introduction

By now you should now how to access CLI arguments and use `setTimeout()`. Let's get to building the Timer app!

![](timer.png)

## Instructions

1. Create a CLI app which takes number of seconds in the following format: ns for n seconds, e.g., and 5s for five seconds. The command for 5 seconds must look like `$ node timer 5s`.
2. Implement the timer by printing the number of seconds left on a new line (in terminal / command prompt) with text "Left: 10s", "Left: 9s", etc. each on a new line.
3. The Timer app filename must be `timer.js`.
4. Enhance the app by adding minutes in the following format nmin, e.g., 1min for 1 minute. The command for 1 minute must look like `$ node timer 1min`.
5. Test the CLI with `$ npm test`


### Extra Info

You might want to consider using `setInterval()` and `clearInterval()` from Node Timers API which is identical to browser timer API.

* [Node Timers API](https://nodejs.org/api/timers.html)
* [JavaScript timers MDN](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers)