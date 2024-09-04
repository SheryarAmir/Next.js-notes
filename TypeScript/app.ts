 //array in typescript came with build_in methods that allow you to perform common operations.

 const fruits:String[]=["apple", "banana","mango","pineApple", "appricot" ,"watermealen" ]

 console.log(fruits[3])

 const updatedFruits=fruits.push("kiwi")

//  console.log(updatedFruits)
//  console.log(fruits)

 const lastData=fruits.pop()
 console.log(lastData)
 console.log(fruits)

 //Iterating over the elements of an array using various loping constructs such asa for...of , or array methods like forEach.
//  using for of loop

// for(let i=0; i<fruits.length ; i++){
//     console.log(fruits[i])
// }


for(const fruit in fruits){
    console.log(fruit)//return the indixing in of element in arrAY.
}

for(const fruit of fruits){
    console.log(fruit)//
}
//for.....in loop(irerates over indixing)
// const arr=[1,2,3,4]
// for(const index in array) {
//     console.log(index) //0,1,2,3
// }

// for...of loop (iterates over values)

// for(const values of arr){
//     console.log(values) //1,2,3,4
// }



//MAP & FILTER method in array in Typescript?



//!map method
//? Doubleing each number
//?Converting numbers to strings

//the map method creates a new array by appling a provided function to each element of the original array.it transforms each element and return a new array with the transfromed values.

const num:number[]=[1,2,3,4,5]
// const doubledata=num.map((curVal:number)=>curVal*2)
// console.log(doubledata)

//convert numbers to string using map method 
const numberToString=num.map((curElm:number)=>curElm.toString())
console.log(numberToString)


//?Filter method 
//?Filtering even numbers
//? filtering number greater then num


//?filter method creates a new array with all elements that pass the test implemented by the provided function.
// const numbers:number[]=[1,2,3,4,5,6,7,8]
// // const evenNumbers=numbers.filter((curVal:number)=>curVal%2===0)
// // console.log(evenNumbers)

const names: string[] = ["sheryarRastogi", "amir", "zain", "rahat", "farhan"];
// const upperCaseNames = names.map((name: string) => name.toUpperCase());
// console.log(upperCaseNames);

