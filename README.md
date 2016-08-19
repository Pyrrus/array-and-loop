# Ping-pong site

## Ping-pong using Javascript & Jquery, 8/19/16

#### By **Adam Gorbahn**

## Description

This page uses input to find what number to get the a ping, a pong or both.

## User interface & business logic

User input    | Output (Business login)
------------- | -------------
6             | [1, 2, ping, 4, pong]
20            | [1, 2, ping, 4, pong, 6, 7, 8, ping, pong, 11, ping, 13, 14, pingpong, 16, 17, ping, 19, pong]

The business logic:

if ((number % 3 === 0) && (number % 5 === 0))
	"pingpong"
else if (number % 3 === 0)
	"ping"
else if (number % 5 === 0)
	"pong"
else
	number

## Setup/Installation Requirements

* Just need a web browser

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* Jquery

## Link

http://pyrrus.github.io/array-and-loop

### License

*GPL*

Copyright (c) 2016 **Adam Gorbahn**