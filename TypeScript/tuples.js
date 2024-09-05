"use strict";
// TRUPLES INTYPESCRIPT 
const personDetails = (person) => {
    const [name, age, hasDriverLicenses] = person;
    console.log(`name: ${name}, age: ${age}, has the driving license: ${hasDriverLicenses ? "Yes" : "No"}`);
};
const person1 = ["John Doe", 30, true];
const person2 = ["Doe", 20, false];
personDetails(person1);
personDetails(person2);
