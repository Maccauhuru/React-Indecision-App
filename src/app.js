/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


let appRoot = document.getElementById("app-info");
ReactDOM.render(<IndecisionApp />, appRoot);


class oldSyntax {
  constructor() {
    this.name = "Mike";
  }
  getGreeting() {
    return `Hi my name is ${this.name}`;
  }
}
  
const printOldSyntax = new oldSyntax();
console.log(printOldSyntax.getGreeting());



console.info("===================================================");
class newSyntax {
name = 'Jen';
}

const printNewSyntax = new newSyntax();
console.info(printNewSyntax);

console.info("===================================================");
 





























// import saySomething, { square ,add } from "./utils";
// console.log("app.js is running");
// console.log(square(7));
// console.log(add(5667,15));
// console.log(saySomething(100,25));


// import { isAdult, canDrink } from "./person";
// console.log(isAdult(18));
// console.log(canDrink(18));

// import isSenior from './person';
// console.log(isSenior(60));

//  import validator from 'validator';
//  console.log(validator.isEmail('Simba@gmail.com'));
//  console.log(validator.isDivisibleBy("1000","51"));