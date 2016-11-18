#Girl Develop It - Intro to JavaScript
===================

### Version adapted by Paige Bolduc and Dianne Eramo for the Baltimore GDI chapter.

This is the Girl Develop It Intro JavaScript course. Material based on original material by Sara Chipps, Pamela Fox, Alexis Goldstein, Izzy Johnston, Leo Newball, and Sylvia Richardson.

The course is meant to be taught in 4 two-hour sections. Each of the slides and practice files are customizable according to the needs of a given class or audience.



## Classes

### Class 1

Introduction to JavaScript and Basic Programming Concepts

An overview of the history of JavaScript, what it is, and how it interacts with the browser. Covers basic JavaScript concepts including variables, data types, and functions. 

### Class 2
Control Flow

Introduces boolean variable, if/then statements, loops, and arrays.

### Class 3

Introduction to the DOM

Introduces the Document Object Model (DOM) and how to use JavaScript to interact with it. Includes finding and modifying nodes.

### Class 4

Events and Animations

Introduces events, listening functions, user inputs, and basic animations. 


## Theme customization

You can change theme colors by changing the theme css to any of the following options:
```html
  <link rel="stylesheet" href="css/theme/gdidefault.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdilight.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdisunny.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdicool.css" id="theme">
```
You can change the text editor theme by changing the highlight.js css to the following options:
```html
  <link rel="stylesheet" href="lib/css/dark.css">
  <link rel="stylesheet" href="lib/css/light.css">
```
You can change transition by changing the reveal transition property in Reveal.initialize
```javascript
  Reveal.initialize({
  				transition:  'default', // default/cube/page/concave/zoom/linear/none
  			});
```

## Instructions for running and developing locally

### To run the app locally, follow these steps:
* `git clone` the directory locally
* `cd` into the "gdi-featured-js-intro" folder
* if you have Python installed, you can use [Python Simple Server](https://docs.python.org/2/library/simplehttpserver.html), by typing the command `python -m SimpleHTTPServer 8000` in the command line and then navigating to "http://localhost:8000/" in the browser
* alternatively, you can download and use the npm package [serve](https://www.npmjs.com/package/serve), to use Node to create a simple http server, by typing `serve` into the command line and navigating to "http://localhost:3000/" in the browser

### For developing locally:
* make sure that your browser is not caching files (you can check this setting in dev tools)
* now, as you make and save changes locally, you'll see them when you refresh the browser
