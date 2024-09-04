 //Object and Type Aliases
 
 //in typescript object are uin ES6 tsed to respresent data with key and values pairs.each key in the object is a string (or a symbol ) that maps to value.

 //let's consider a real-life example of representing a person's information using typescript objects.

 // ? name ,age ,istudent , address {city, country}

 const mySelf:{
     firstname: string;
     age: number;
     lastname:string,
     isstudent:true,
     address:any;

 }={
    firstname:"sheryar",
     lastname:"Amir",
     age:20,
     isstudent:true,
     address:{
       city:"gilgit",
       country:"pakistan",
       town:"sonikot",
       streetNo:"234" 
     },
    }
console.log(mySelf)
    console.log(mySelf.address.town)

    mySelf.address.town="jutail"
    mySelf.address.country="india"
    console.log(mySelf.address)


   
   
       /*In TYPESCRIPT a type Alias is a way to give a name to  a specific type or combination of types.it allows you to create a custom name for a type, making it easier to resue and refer .it allows you to create a custom name for a type, making it easier to reuse and refers to the same types in different parts of your code . type aliases proides better readability ,organization, and abstraction of complex types,.

       // to define a type alias, you use the type keyword followed by the alisa name and the type definition.

       type Student1 ={
        firstname: string;
        age: number;
        lastname:string,
        isstudent:true,
        address:any;
       }

       const student1: Student1={
       firstname:"sheryar",
        lastname:"Amir",
        age:20,
        isstudent:true,
        address:{
          city:"gilgit",
          country:"pakistan",
          town:"sonikot",
          streetNo:"234" 
        },
       }
   console.log(student1)
       console.log(student1.address.town)
   
       student1.address.town="jutail"
       student1.address.country="india"
       console.log(student1.address)


       
       const student2: Student1={
        firstname:"sheryar",
         lastname:"Amir",
         age:20,
         isstudent:true,
         address:{
           city:"gilgit",
           country:"pakistan",
           town:"sonikot",
           streetNo:"234" 
         },
        }
    console.log(student1)
        console.log(student1.address.town)
    
        student1.address.town="jutail"
        student1.address.country="india"
        console.log(student1.address)
        
       const student3: Student1={
        firstname:"sheryar",
         lastname:"Amir",
         age:20,
         isstudent:true,
         address:{
           city:"gilgit",
           country:"pakistan",
           town:"sonikot",
           streetNo:"234" 
         },
        }
    console.log(student1)
        console.log(student1.address.town)
    
        student1.address.town="jutail"
        student1.address.country="india"
        console.log(student1.address)
      

        type Items = {
            id: number;
            price: number;
            itemname: string;
            buy: boolean;
            quantity: number; 
        };
        
        const list: Items = {
            id: 1,
            price: 204,
            itemname: "sugar",
            buy: true,
            quantity: 3, 
        };
        
        const calculateTotalPrice = (list: Items): string => {
            return `${list.itemname} total cost: $${list.price * list.quantity}`;
        };
        
        console.log(calculateTotalPrice(list));
        
  */

        //Function call Signature in tyscript

        