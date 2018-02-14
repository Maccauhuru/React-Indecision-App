/*jshint esversion:6 */
class Person {
  constructor(name = "Jane Doe", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, i am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor () {
      return !!(this.major);
  }
  getDescription (){
      let description = super.getDescription();
      if(this.hasMajor()){
       description += `He is majoring in ${this.major}`;
      }
      return description;
  }
}

class Traveler extends Person{
    constructor(name,location){
        super(name);
        this.location = location;
    }
    hasLocation(){
        return !!(this.location);
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.location){
        greeting += ` I'm visiting from ${this.location}.`;
        }
        return greeting;
    }
}

const me = new Traveler("Simbarashe", "Texas");
const other = new Traveler('Anonymous','Nowhere important');
console.log(me.getGreeting());
console.log(other.getGreeting());
