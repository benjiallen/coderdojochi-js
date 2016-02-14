# CoderDojoChi JavaScript course examples

Working with [CoderDojoChi](http://coderdojochi.org/) to teach children the basics of programming with the JavaScript language and [P5.js](http://p5js.org/).

You can view the examples below:

* [Hello World! Smiley face example](http://benjiallen.github.io/coderdojochi-js/hello-world/)
* Lesson 1 - calling functions
    - Examples
        + [Basic shapes](http://benjiallen.github.io/coderdojochi-js/1-calling-functions/examples/1-simple-shapes/index.html)
        + [Add color to shapes - RGB values and fill()](http://benjiallen.github.io/coderdojochi-js/1-calling-functions/examples/2-fill-color/index.html)
        + [Control the outlines of our shapes with stroke()](http://benjiallen.github.io/coderdojochi-js/1-calling-functions/examples/3-stroke/index.html)
    - Challenges
        + [Neutral face smiley](http://benjiallen.github.io/coderdojochi-js/1-calling-functions/challenges/1-neutral-smiley/solution/index.html)
        + [Open mouth smiley](http://benjiallen.github.io/coderdojochi-js/1-calling-functions/challenges/2-open-mouth-smiley/solution/index.html)
        + [Eye balls](http://benjiallen.github.io/coderdojochi-js/1-calling-functions/challenges/3-eye-balls/solution/index.html)
        + [The perfect smore!](http://benjiallen.github.io/coderdojochi-js/1-calling-functions/challenges/4-smores/solution/index.html)
* Lesson 2 - variables that are assigned numbers
    - Examples
        + [Variable basics - declare, assign, use](http://benjiallen.github.io/coderdojochi-js/2-variables-numbers/examples/1-repeating-values/index.html)
        + [Number operators and using JavaScript like a calculator](/2-variables-numbers/examples/2-number-operators/operators-in-the-console.js)
        + [Car drawn with relative positioning](http://benjiallen.github.io/coderdojochi-js/2-variables-numbers/examples/3-relative-positioning/index.html)
        + [Animating our car](http://benjiallen.github.io/coderdojochi-js/2-variables-numbers/examples/4-animation/index.html)
    - Challenges
        + [Ice cream dream](http://benjiallen.github.io/coderdojochi-js/2-variables-numbers/challenges/1-ice-cream/solution/index.html)
        + [Seconds in a year and number of pizza slices per person](/2-variables-numbers/challenges/2-console-practice-seconds-pizza/solution/seconds-pizza.js)
        + [Open mouth smiley drawn using relative positioning](http://benjiallen.github.io/coderdojochi-js/2-variables-numbers/challenges/3-relative-smiley/solution/index.html)
        + [Lake Michigan sunrise with boats and shooting stars!](http://benjiallen.github.io/coderdojochi-js/2-variables-numbers/challenges/4-sunrise/solution/index.html)

## Where are the lessons?

Each folder located in the project root directory and starting with a number is a lesson. A path to a lesson would look like `/<lesson-number>-<lesson-description>/`. A lesson is made up of 2 parts:

1. "examples"
2. "challenges"

The idea is that teachers walk through "examples" to teach concepts and then students work on "challenges" to help them understand the concepts they have just been shown.

"examples" and "challenges" are explained in more detail below.

### Examples

"examples" are code samples to use when teaching. You can find all examples for a given lesson in `/<lesson-number>-<lesson-description>/examples/`.

Each lesson contains an "examples" folder and each "examples" folder contains 1 or more folders containing code examples. A path to a code example would look like `/1-calling-functions/examples/1-simple-shapes/`.

Typically code examples are made up of 2 files:

1. `index.html`
2. `sketch.js`

`sketch.js` contains the code necessary for demonstrating JavaScript concepts. `sketch.js` files contain learning outcomes at the top of the file and are within code comments.

### Challenges

"challenges" are coding challenges for students. You can find all challenges for a given lesson in `/<lesson-number>-<lesson-description>/challenges/`.

Each lesson contains a "challenges" folder and each "challenges" folder contains 1 or more folders with code challenges. A path to a code challenge would look like `/1-calling-functions/challenges/3-eye-balls/`.

Code challenges contain 2 folders:

1. "problem"
2. "solution"

The "problem" folder contains starter code for students to hack on. The "solution" folder contains one answer to the challenge.
