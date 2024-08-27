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
