"use strict";
//Object and Type Aliases
//in typescript object are uin ES6 tsed to respresent data with key and values pairs.each key in the object is a string (or a symbol ) that maps to value.
//let's consider a real-life example of representing a person's information using typescript objects.
// ? name ,age ,istudent , address {city, country}
const mySelf = {
    firstname: "sheryar",
    lastname: "Amir",
    age: 20,
    isstudent: true,
    address: {
        city: "gilgit",
        country: "pakistan",
        town: "sonikot",
        streetNo: "234"
    },
};
console.log(mySelf);
console.log(mySelf.address.town);
mySelf.address.town = "jutail";
mySelf.address.country = "india";
console.log(mySelf.address);
const list = {
    id: 1,
    price: 204,
    itemname: "sugar",
    buy: true,
    quantity: 3,
};
const calculateTotalPrice = (list) => {
    return `${list.itemname} total cost: $${list.price * list.quantity}`;
};
console.log(calculateTotalPrice(list));
