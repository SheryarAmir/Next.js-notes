"use strict";
function Add(a, b) {
    return a + b;
}
console.log(Add(10, 234));
//type annotations : in typescript type annotation is a way of  explicitly specifying the type of variable .function parameters,or function return value.type annotations are expressed by using a colon(:) followed by desired type after the varible or function parameter declaration. there can be a space after the colon.
let longsen = "this is is sheryar amir ";
let shortsen = longsen.slice(10);
console.log(shortsen);
let sen = "allowUnreachableCode,allowUnusedLabels,alwaysStrict,exactOptionalPropertyTypes,";
let sen1 = "allowUnreachableCode,allowUnusedLabels,alwaysStrict,exactOptionalPropertyTypes,";
if (sen === sen1) {
    console.log("both are equal");
}
else {
    console.log("different");
}
// let isdone:boolean=true;
function isdEven(a) {
    return a % 2 === 0;
}
console.log(isdEven(5));
// TYPE ANY
//The any types is the most fliexbile type in typescript. it essentially turns off all type checking for the variables or expression it is applied to.
//Behavior: When you use any, TypeScript effectively turns off type checking for that variable, which can lead to runtime errors if the operations you're performing are not valid for the actual type of the value.
//Use Case: any is often used when you are migrating a JavaScript project to TypeScript or dealing with legacy code where the type is not known, and strict typing is not immediately required.
//working with  Dynamic data: when dealing with data from dynamic sources like user inputs or forms, network responce, or deserialized JSON object, the any type can be useful.
let studentID = "Sheryar";
studentID = 23497;
console.log(studentID);
// TYPE UNKNOWN
//Purpose: The unknown type is a safer alternative to any. It also allows any value to be assigned to a variable, but it requires you to perform type checks before performing operations on the value.
//The unknown type is safer alternative to any because to any because it still enforces types checking any types safety.variables of type unknown can hold values of any type, but yo must perform type checks or type assertions before using them in specific ways.
let myfavNum1;
myfavNum1 = 5;
myfavNum1 = "sheryar";
myfavNum1 = true;
if (typeof myfavNum1 === "boolean") {
    console.log("this is a bo0lean type");
}
else if (typeof myfavNum1 === "number") {
    console.log("this is a number type");
}
else {
    console.log("this is a string type");
}
//Function in TypeScript  / function anvocation
function greet(name, id) {
    //the two name and id is called parameters.
    console.log(`welcome ${name} and you id ${id}`);
}
greet("sheyar", 120);
//the two sheryar and 120 is called arguments.
// using ARROW function
const hello = (lastname, rollnumber) => {
    //the two name and id is called parameters.
    console.log(`you last name is  ${lastname} and you id ${rollnumber}`);
};
hello("Amir", 7);
//the two sheryar and 120 is called arguments
//Function return type in typeScript
const classname = (classname, section) => {
    //make sure to change console.log into return. then it will work propley.
    return `you last name is  ${classname} and you id ${section}`;
};
classname("yellow", 230);
const ispalindrome = (palin) => {
    let mypalin = palin.split("").reverse().join("");
    console.log(mypalin);
    return mypalin === palin;
};
console.log(ispalindrome("123251"));
//
const calculateAverage = (num) => {
    const total = num.reduce((acc, val) => acc + val, 0);
    return total / num.length;
};
console.log(calculateAverage([23, 10, 14, 3, 20, 50])); // Output: 20
