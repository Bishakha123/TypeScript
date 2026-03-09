// 1.Typescript
//Features   JS                                      TS
//Typing     Dynamic(types are checked at runtime)  Static(Types are checked during development)
//Errors     Discovered when the user run the code   discovered while user are writing the code
//fast development
//tsc -v  //check the version
//npm i -g typescript //download typescript
//tsc 1.index.ts //node 1.index.js //we save the file index.ts . it after converting to js. we run the js file not ts file.
//javascript drawback= only in run time
//
//1.1 Datatype
//number//string//boolean//null//undefined
//enum//any//unknown
//1.2 variable declaration methods
var b = 10; //assgin the b as the number
var c = "bishakha"; //assign c as the string
var d = false;
var e;
var f;
console.log(b);
//1.2.1 any vs unknown
console.log("Any vs unknown");
var anyvar = 0;
anyvar = "any variable";
anyvar = false;
//console.log(anyvar.toUpperCase()); //note:doesnot show error in compiletime. only show error in run time
var unknownvar = 0;
unknownvar = false;
unknownvar = "unknown variable";
//console.log(unknownvar.toUpperCase()); //note: shows error in compile time.In other to run this code we must check it is string or not
if (typeof unknownvar === "string") {
    console.log(unknownvar.toUpperCase()); //output :UNKNOWN VARIABLE
}
//1.3 PadStart vs PadEnd
//console.log("padstart vs padend");
//let padstartvar: unknown = "11";
//if (typeof padstartvar === "string") {
//  console.log(padstartvar.padStart(4, "0")); //0011//note; 4 is the maxlength  if not suffiecient it add 0 ie output will be 0011
//}
//if (typeof padstartvar === "string") {
//  console.log(padstartvar.padEnd(4, "0")); //1100
//}
//1.4 Array
var numbers = [3, 23, 45];
var users = ["a", "b"]; //or let users:string[]
//1.5 tuple
//fix length array
var tuplevar = ["aa", "bb", true];
//1.6 enum
//single variable ma multiple data store garna lai use garcha
//as type pani use garna milcha aani as value pani milcha
console.log("Enum");
var Rolevar;
(function (Rolevar) {
    Rolevar[Rolevar["ADMIN"] = 0] = "ADMIN";
    Rolevar["USER"] = "user";
    Rolevar[Rolevar["SUPER_ADMIN"] = 10] = "SUPER_ADMIN";
    Rolevar[Rolevar["AGENT"] = 11] = "AGENT";
})(Rolevar || (Rolevar = {}));
console.log(Rolevar.ADMIN); //0//default value=0
console.log(Rolevar.USER); //user
console.log(Rolevar.SUPER_ADMIN); //10
console.log(Rolevar.AGENT); //11
var user_tuple = [
    "bishakha",
    "aa@gmail.com",
    Rolevar.ADMIN,
];
console.log(user_tuple); //output [ 'bishakha', 'aa@gmail.com', 0 ]
//1.7 Interface
//user ko object ko shape define garna help garcha
console.log("Interface");
var user = {
    //instead of  let user: { name: string; address: string; email: string } = {
    name: "Bishakha",
    email: "aa@gmail.com",
    pass: "password1",
};
console.log(user); //{ name: 'Bishakha', email: 'aa@gmail.com', pass: 'password1' }
var user2 = {
    name: "Anish",
    email: "bb@gmail.com",
    pass: "password2",
    role: Rolevar.USER,
};
console.log(user2); //  name: 'Anish', email: 'bb@gmail.com',  pass: 'password2',role:'user'}
//user.pass = "123"; //pass is readonly so cannot assign
//utility types
//1.8 Function types
console.log("Function Type");
var add = function (a, b) {
    //function ma type defined gareko
    return a + b;
};
add(12, 34);
//add("a", "b");
//1.4 Return Types
//1.4.1 void
var greet = function (name) {
    console.log("hello", name);
};
console.log(greet("john"));
// //1.4.2 never // function ko body bata throw gareko bhanne
var neverFunc = function () {
    console.log("hellow");
    throw "Hellow";
};
// //function name email leene argu return interface return garnu paryo
// interface IKyc {
//   name?: string;
//   email?: string;
// }
// const kycFunc = (name: string, email: string): IKyc => {
//   return { name, email };
// };
// //kycFunc("Bishakha", "aa@gmail.com");
// console.log(kycFunc("Bishakha", "aa@gmail.com"));
// // const kycFunc=IKyc:(name:string ,email:string)
//1.5 Object Types
console.log("ObjectType");
var kyc = {
    name: "Bishakha",
    email: "aa@gmail.com",
};
console.log(kyc); //{ name: 'Bishakha', email: 'aa@gmail.com' }
//1.6 union [ | ]& intersection [&]
// //1.5.1 Tyopes alias
console.log("union");
//1.5.1 union
var id;
id = "1";
id = 1;
//1.5.2 intersection
console.log("intersection");
var ab = {
    //or let ab: A_an_B  ={
    a: "",
    b: "",
};
var a_or_b = {
    a: "",
    b: "",
};
var ia = {
    a: "", //note: IA has two interface so both must required
    b: "",
};
console.log("Function Type");
var sub = function (a, b) {
    console.log(a, b);
    return a - b;
};
//1.6class
console.log("class");
// interface IPerson{
//     name:string;
//     email:string;
//     password:"string";
//     getPassword:()=>string;
//     getEmail:()=>string;
// }
// class Person implements IPerson{
//     public name:string;
//     protected email :string;
//       password :string;
//     constructor (name: string,email:string, password:string)
//     {
//       this.email=email;
//       this.name=name;
//       this password =password;
//     }
//     getEmail(){
//       return this.email;
//     }
//     getPassword()
//     {
//       return this.password;
//     }
// }
//1.7 Generic Type
console.log("Generic Type");
var interfacevar = {
    value: "Bishakha",
};
console.log(interfacevar); //{ value: 'Bishakha' }
var interfacevar2 = {
    value: {
        x: 1,
        y: 1,
    },
};
console.log(interfacevar2);
// let box:IBox<{x:Number;y:number}>={
//     value :{
//         x:1,
//         y:1,
//     },
// }
// //
// const getFirstEl=(arr:number[]):number=>{
//    return arr[0];
// }
// console.log(getFirstEl<number>([12,4,35]));
// console.log(getFirstEl<string>(["1","2"]));
var getFirstEl = function (arr) {
    return arr[0];
};
console.log(getFirstEl([12, 4, 35])); //12
console.log(getFirstEl(["1", "2"])); //1
