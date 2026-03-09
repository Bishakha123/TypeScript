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
let b: number = 10; //assgin the b as the number
let c: string = "bishakha"; //assign c as the string
let d: boolean = false;
let e: null;
let f: undefined;
console.log(b);

//1.2.1 any vs unknown
console.log("Any vs unknown");
let anyvar: any = 0;
anyvar = "any variable";
anyvar = false;
//console.log(anyvar.toUpperCase()); //note:doesnot show error in compiletime. only show error in run time

let unknownvar: unknown = 0;
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
let numbers: number[] = [3, 23, 45];
let users: Array<string> = ["a", "b"]; //or let users:string[]

//1.5 tuple
//fix length array
let tuplevar: [string, string, boolean] = ["aa", "bb", true];

//1.6 enum
//single variable ma multiple data store garna lai use garcha
//as type pani use garna milcha aani as value pani milcha

console.log("Enum");
enum Rolevar {
  ADMIN,
  USER = "user",
  SUPER_ADMIN = 10,
  AGENT,
}
console.log(Rolevar.ADMIN); //0//default value=0
console.log(Rolevar.USER); //user
console.log(Rolevar.SUPER_ADMIN); //10
console.log(Rolevar.AGENT); //11

let user_tuple: [string, string, Rolevar] = [
  "bishakha",
  "aa@gmail.com",
  Rolevar.ADMIN,
];
console.log(user_tuple); //output [ 'bishakha', 'aa@gmail.com', 0 ]

//1.7 Interface
//user ko object ko shape define garna help garcha

console.log("Interface");
interface IUser {
  name: string;
  email?: string; //? is the optional
  readonly pass: string; //for readonly
}

interface IUser2 extends IUser {
  role: Rolevar;
}

let user: IUser = {
  //instead of  let user: { name: string; address: string; email: string } = {
  name: "Bishakha",
  email: "aa@gmail.com",
  pass: "password1",
};
console.log(user); //{ name: 'Bishakha', email: 'aa@gmail.com', pass: 'password1' }

let user2: IUser2 = {
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
const add = (a: number, b: number): number => {
  //function ma type defined gareko
  return a + b;
};

add(12, 34);
//add("a", "b");

//1.4 Return Types
//1.4.1 void
const greet = (name: string): void => {
  console.log("hello", name);
};
console.log(greet("john"));

// //1.4.2 never // function ko body bata throw gareko bhanne
const neverFunc = (): never => {
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
type objectType = {
  name: string;
  email?: string;
};
let kyc: objectType = {
  name: "Bishakha",
  email: "aa@gmail.com",
};
console.log(kyc); //{ name: 'Bishakha', email: 'aa@gmail.com' }

//1.6 union [ | ]& intersection [&]
// //1.5.1 Tyopes alias
console.log("union");

type ID = string | number;
type STATUS = "error" | "success"; //or let resStatus: STATUS; resStatus = "error"; resStatus = "success";

//1.5.1 union
let id: ID;
id = "1";
id = 1;

//1.5.2 intersection
console.log("intersection");
type A = {
  a: string;
};

type B = {
  b: string;
};

type A_and_B = A & B;
type A_or_B = A | B;

let ab: A & B = {
  //or let ab: A_an_B  ={
  a: "",
  b: "",
};

let a_or_b: A_or_B = {
  a: "",
  b: "",
};
// //1.5.5
interface IA {
  a: string;
}
interface IA {
  b: string;
}

let ia: IA = {
  a: "", //note: IA has two interface so both must required
  b: "",
};
console.log("Function Type");
type FunctionType = (x: number, y: number) => number;
const sub: FunctionType = (a, b) => {
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

// interface IX {
//   value: string;
// }

// interface IY {
//   value: number;
// }

// let interfacevarstring: IX = {
//   value: "Bishakha",
// };

// let interfacevarnum: IY = {
//   value: 1,
// };
// //we need to write 2 times using generic type we can optimize the code

interface IX<T> {
  value: T;
}

let interfacevar: IX<string> = {
  value: "Bishakha",
};
console.log(interfacevar); //{ value: 'Bishakha' }

let interfacevar2: IX<{ x: number; y: number }> = {
  value: {
    x: 1,
    y: 1,
  },
};
console.log(interfacevar2); //{ value: { x: 1, y: 1 } }

// //
// const getFirstEl=(arr:number[]):number=>{
//    return arr[0];
// }

// console.log(getFirstEl<number>([12,4,35]));
// console.log(getFirstEl<string>(["1","2"]));

const getFirstEl = <T>(arr: T[]): T => {
  return arr[0];
};

console.log(getFirstEl<number>([12, 4, 35])); //12
console.log(getFirstEl<string>(["1", "2"])); //1
