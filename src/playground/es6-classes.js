/*jshint esversion:6 */
class Person {
  constructor(name = "Jane Doe", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi There! ${this.name}`;
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

const me = new Student("Simbarashe", 36,"Computer Science");
const other = new Student();
console.log(me.getDescription());
console.log(other.getDescription());
