// TRUPLES INTYPESCRIPT 

/* 
// * In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of
elements of the same type, and their size can vary.

// ? Real-life example of using tuples in TypeScript:
// ? Let's consider a scenario where you want to represent a person,s abasdic  information including their name, age, and whether they have a driver's license. using a tuple can be an appropriate  choice because these elements have a specific order and type.




type PersonInfo = readonly [string, number, boolean];

const personDetails = (person: PersonInfo) => {
    const [name, age, hasDriverLicenses] = person;
    console.log(`name: ${name}, age: ${age}, has the driving license: ${hasDriverLicenses ? "Yes" : "No"}`);
}

const person1: PersonInfo = ["John Doe", 30, true];
const person2: PersonInfo = ["Doe", 20, false];

personDetails(person1);
personDetails(person2);

*/


/*//UNION AND INTERSECTION

 //union types allows you to specify that a variable can hold values can hold values multipes types. you can use the | (piepe) symbol to define a union types.In


*/