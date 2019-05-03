// Tutorials and notes for starting out with TypeScript. run "tsc test" from this folder to check out how this code transpiles - will transpile to test.js.
/* eslint-disable no-console */

import { string } from "prop-types";

export  {}
let message = "Hi World";
console.log(message);

let x = 10;

let isBeginner = true;
let total = 0;
let name = "Sam";

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1,2,3];
let list2: number[] = [1,2,3];

let person1: [string, number] = ['Chris', 22];

enum Color {Red = 4, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Sam';
console.log(randomValue);

let myVar: unknown = "10";

// checks if object has a name parameter or not.
function hasName(obj: any): obj is {name: string } {
  return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}
if (hasName(myVar)){
  console.log(myVar.name);
}
if (hasName(randomValue)){
  console.log(randomValue.name);
}
(myVar as string).toUpperCase();

let multiType: number | boolean;
multiType = 20;

function add(num1: number, num2?: number, num3: number = 10): number {
  if (!num2)
    return num1 + num3;
  else
    return num1 + num2 + num3;
}

console.log(add(c, multiType));
console.log(add(multiType));

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person){
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
};
fullName(p);

let q = {
  firstName: "Sam"
};
fullName(q);

// using classes - declare class called Employee with three members (similar to C#)
class Employee {
  // Property called employeeName
  public employeeName: string;

  // A Constructor
  constructor(name: string){
    this.employeeName = name;
  }

  // A Method 
  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee('Sam');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
  public constructor(managerName: string){
    super(managerName);
  }

  delegateWork(){
    console.log(`Manager delegating tasks`)
  }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);