/*jshint esversion:6*/

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props)=>{
    return (<div>
        <p>header</p>
        {props.content}
        <p>footer</p>     
    </div>
);
};
const template = (
<div>
<h1>Page Titles</h1>
<p>page subtitle</p>
</div>
);
let appRoot = document.getElementById("app-info");
ReactDOM.render(<Layout content={template}/>, appRoot);


// class OldSyntax {
//   constructor() {
//     this.name = "Mike";
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi my name is ${this.name}`;
//   }
// }
  
// const printOldSyntax = new OldSyntax();
// const getGreeting = printOldSyntax.getGreeting;
// console.log(getGreeting());


// console.info("===================================================");
// class NewSyntax {
// name = 'Jen';
// getGreeting = ()=>{
//     return `Hi my name is ${this.name}`;
// }
// }

// const printNewSyntax = new NewSyntax();
// const newGetGreeting = printNewSyntax.getGreeting;
// console.log(newGetGreeting());

// console.info("===================================================");
 







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