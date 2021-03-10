//LET CONST vs VAR
const person = {
    firstName : "John",
    age : 33,
};

person.firstName = "Michell";
person.adress="Timika"

console.log(person);

//STRING LITERAL
// Hallo nama saya Michell, Umur 19 Tahun
let kalimat = "Hallo nama saya  " +person.firstName +", Umur saya :" +person.age;
console.log(kalimat);

let kalimat6 = `(Menggunakan backtik)-> Hello nama saya ${person.firstName}. umur saya : ${person.age}`;
console.log(kalimat6);

//ARROWA FUNCTION
function sayHello (){

}

const sayHello2 = function (){

}

 //arrow function
//  const sayHello3 = (param1,param2,param3) => {
//      return `Hello World ini adalah Arrow Function ${param1} ${param2}`;
//  };
//revisi
const sayHello3 = (param1,param2,param3) =>  `Hello World ini adalah Arrow Function ${param1} ${param2}`;
console.log (sayHello3("Michell","Tene"));

//DEFAULT PARAMETER
const defaultParameter =(param1,param2 = "Tene",param3) => `Ini Default Param ${param1} ${param2}`
console.log(defaultParameter("Michell"));

//REST PARAMETER & SPREAD OPERATOR
//menggunakan 3 titik
//Before
/*const display = (param1,param2,param3) => {
    const numbers [param1,param2,param3] // ubah ke array
    console.log(param1,param2,param3)
};

display (1,2,3); */

//revisi
const display = (param1,param2,...params) => {
    console.log(param1,param2,params) //params tidak boleh ditengah
};
display (1,2,3,5,6);

//spread operator 
const arr1 =[1,2,3];
const arr2 =[4,5,6];
const arr3 =[8,9,10];

//ES5
const combineArr = arr1.concat(arr2);
console.log("Masih menggunakan ES5" +combineArr);

//Spread (sebar)
console.log(...arr1);
const combineArr2 =[...arr1,...arr2,7, ...arr3];
console.log("Menggunkaan Operator Spread " +combineArr2);

//spread pada objek
const obj1 = {a: 1, b: 2,c: 3};
const obj2 = {d:4, e: 5,f: 6};

const combineObj {obj1,obj2};
console.log(combineObj);

const person1 = {
    first="Gabriell",
    age: 19,
};

person1 = {
    ...person1,
    adress:"Timika",
    status : "Mahasiswa",
}

console.log(person1);