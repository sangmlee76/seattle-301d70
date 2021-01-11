'use strict';

// STEP 1
// This is a standard function expression. You may also be familiar with function declarations, which begin with the "function" keyword.
const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};

// Uncomment the following line of code to see the output in the browser console
console.log('The old way:', theOldWay('Code 301'));


// STEP 2
// We can refactor our first function to use an arrow function.
// The word "function" is removed and an arrow is added in between the parameter and the opening curly brace
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

//  Uncomment the following line of code to see the output in the browser console
console.log('The new way:', theNewWay('Code 301'));


// STEP 3
// When we have one parameter, we can omit the parentheses
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

//  Uncomment the following line of code to see the output in the browser console
console.log('Without parens:', withoutParens('Code 301'));


// STEP 4
// If the code block contains a single line of code, we can write everything on one line
// We no longer need the curly braces and the return is implicit
// Without an arrow function, we need to explicitly type "return"
const oneLiner = course => `I cam currently enrolled in ${course}`;

// Uncomment the following line of code to see the output in the browser console
console.log('As a one-liner:', oneLiner('Code 301'));


// STEP 5
// What if we have multiple parameters?
// In a function expression, they all go in the parentheses
const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

// Uncomment the following line of code to see the output in the browser console
console.log('Let\'s do some math:', add(4, 5));


// STEP 6
// When we have multiple parameters, they must be wrapped in parentheses
// We can only remove the parentheses when there is a single parameter
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// Uncomment the following line of code to see the output in the browser console
console.log('Add as a one-liner:', addOneLiner(4, 5));


// STEP 7
// What if we have multiple lines of code?
// We need to use a code block
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

// Uncomment the following line of code to see the output in the browser console
console.log('Multi-line arrow function:', multiLiner('hello'));


// STEP 8
// The way an object is returned is different with an arrow function, too.
// Here is how we return an object without arrow functions
const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

// Uncomment the following line of code to see the output in the browser console
console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));


// STEP 9
// With an arrow function, we need to wrap our object in parentheses
// Otherwise, it will be interpreted as a code block
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

// Uncomment the following line of code to see the output in the browser console
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));


// STEP 10
// Uncomment the console.log lines to view the output of each function in the browser console.
// Refactor each function into an arrow function.
// Write your solutions on a single line wherever possible.



const sum = (a, b, c, d) => a + b + c + d;

// Uncomment the following line of code to see the output in the browser console
console.log(sum(1, 2, 3, 4));


const objectLit = () => ({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
});

// Uncomment the following line of code to see the output in the browser console
console.log(objectLit());


const sumAndProduct = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return [sum, product];
};

// Uncomment the following line of code to see the output in the browser console
console.log(sumAndProduct(3, 9));


const message = name => `Hello, ${name}!`;

// Uncomment the following line of code to see the output in the browser console
console.log(message('Allie'));


const Student = function(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

const joe = new Student('Joe', 'Schmoe', 100);

// Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
console.log(joe);

// After viewing the previous console.log(), return the code to a working state.



Student.prototype.greeting = function() {
  return `Hi, my name is ${this.name}`;
};

// Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
console.log(joe.greeting());

// After viewing the previous console.log(), return the code to a working state.



Student.courseName = () => 'This student is enrolled in Code 301.';

// Uncomment the following line of code to see the output in the browser console
console.log(Student.courseName());



// STEP 11
// How do arrow functions affect constructor functions?
Student.prototype.scope = function() {
  console.log(this);
};

// Uncomment the following line of code to see the output in the browser console
console.log(joe.scope());

Student.prototype.scopeArrow = () => console.log(this);

// Uncomment the following line of code to see the output in the browser console
console.log(joe.scopeArrow());

// Write a COMMENT below to answer the following questions.
// 1. What is "this" when joe.scope() is invoked?
//    ANS: It is in reference to the Student constructor function object, which has 3 attributes.
// 2. What is "this" when joe.scopeArrow() is invoked?
//    ANS: It is referring to the global window object, which is essentially the browser (in my case Chrome)
// 3. Explain why "this" is different when an arrow function is used.
//  My general understanding based on reading the below references is that, in summary, Arrow functions were created to provide a simple, clean code for execution. There are mixed responses whether this simplifier is a feature or a bug based on a developer's point of view. However, it appears that one of the issues in the past with using contextual 'this' was when it came to nested use. Thigs got confusing and there was ways to bind (beyond my understanding) -- with the EC6 simplification, you cannot bind the contextual 'this' for Arrow functions, they just inherit it from their parent/surrounding (rather than creating their own) in something described as "lexical scoping" (at least this is what I think the articles were saying).  If one believes that this is by design and a positive feature, while it may limit the use of Arrow function since it cannot be readily used as methods or in constructor functions, it does preserve the simplicity of its use case.  

// References used to answer #3:
// https://dev.to/shubham57396755/arrow-functions-and-this-keyword-1kg7
// https://livecodestream.dev/post/when-not-to-use-javascript-arrow-functions/
// https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
// https://derickbailey.com/2015/09/28/do-es6-arrow-functions-really-solve-this-in-javascript/
// https://www.javascripttutorial.net/es6/javascript-arrow-function/
