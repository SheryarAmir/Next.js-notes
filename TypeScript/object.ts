 //Object and Type Aliases
 
 //in typescript object are uin ES6 tsed to respresent data with key and values pairs.each key in the object is a string (or a symbol ) that maps to value.

 //let's consider a real-life example of representing a person's information using typescript objects.

 // ? name ,age ,istudent , address {city, country}

//  const mySelf:{
//      firstname: string;
//      age: number;
//      lastname:string,
//      isstudent:true,
//      address:any;

//  }={
//     firstname:"sheryar",
//      lastname:"Amir",
//      age:20,
//      isstudent:true,
//      address:{
//        city:"gilgit",
//        country:"pakistan",
//        town:"sonikot",
//        streetNo:"234" 
//      },
//     }
// console.log(mySelf)
//     console.log(mySelf.address.town)

//     mySelf.address.town="jutail"
//     mySelf.address.country="india"
//     console.log(mySelf.address)


   
   
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
 

        //Function call Signature in tyscript

// the function call signature to the declaration or definition of a function, which includes the 
function's name, parameters, and return types.it defines the structure and type information of a function without including the function's implementation body.

//lets add one one function inside the object.it's more like creating a method in object.

//very important cal signatures are typically used inside object type notations to describe the shape of the function within object types.

//function call signature is used to describe the function call within the object type.

   


type Student = {
  name: string;
  age: number; // Use lowercase 'number' for type annotation
  gender?: string;
  greet: (country: string) => string;  // Method call signature
}

const student1: Student = {
  name: "sheryar",
  age: 20,
  greet(country: string): string {
    return `Hello, my name is ${this.name}, and I am ${this.age} years old from ${country}.`;
  }
}

const Intro = (student: Student): string => {
  const { name, age } = student;
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Correct console log syntax
console.log(Intro(student1));
console.log(student1.greet('India'));

  */



//Enums in typescript 

//Enums in typescript , are commonly used when  you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values ans associates them with  specifice meaning>

//Enums are useful when you want to define a set of named values and associate them with specific meanings.

/*    

enum Roles {
  Theuser = "users",
  Theadmin = 'admin'
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
}

const user1: LoginDetails = {
  name: "sheryar",
  email: "sheryaramir@gmail.com",
  password: "dgwnieuq2dfkld112",
  role: Roles.Theadmin
}

const user2: LoginDetails = {
  name: "amir",
  email: "amir@example.com", // Added email here
  password: "kld112",
  role: Roles.Theuser
}

const isAdmin = (user: LoginDetails): string => {
  const { name, role } = user; // Destructure from `user`, not `user1`
  return role === Roles.Theadmin ? `${name} is allowed to edit the website` : `${name} is not allowed to edit the website`;
}

// Corrected function calls
console.log(isAdmin(user1));
console.log(isAdmin(user2));


 */



