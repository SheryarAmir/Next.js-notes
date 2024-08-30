//Type Inference / type infer in typeScript / type Anotation
//Type Inference mean type define by the typescript .and type anotation mean type define by the user or the develpoer .
//type inference in typescript refers to the abillity of the typescript compiler  to automatically determine and assigned types to the variables, expressions, and functions return values based on their usages context in the code .
// ? Use type inference for simple cases where the assigned value clearly indicates the intended type.
// ? When in doubt, provide explicit type annotations to make your intentions clear.
// ? Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.


//Optional and Default Paramaters in function  in typeScript

//typescript allows you to define optional and default parameters in function.
//optional parameters are denoted by appending a "?" symbol after the parameter name,
//and a defualt  paramaters are specified by providing a default value in the parameter.


//Default paramaters
const greeting=(name:string , id:number=1):string =>{
    //in the id parameter we did not give any argument but it will take the default id which 1.
    return `Hello ${name} your id is ${id}`
}
console.log(greeting("John")) //Hello John your id is 123

 
const greet2=(name:string , id?:number):string =>{
    //in the id parameter we give a optional parameter which me if the id is exit then it will return some thing but id the id did not exit It will also give the out put.
   
    if(id){
        return `Hello ${name} your id is ${id}`
    }
    else{
        return `Hello ${name}`
    }
}
console.log(greet2("sheryar" )) 

 //Array in typescript
 const numbers:number[]=[1,2,3,4,5,6]

//array using constructor
 const number1:number[] =new Array(1,2,3,4,5,6)

 //array of method
  const names=Array.of("sheryar" ,"zain", "rahat" ," jkarim")