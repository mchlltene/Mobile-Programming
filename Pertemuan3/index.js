//ARRAY
let numbers =[1,2,3,4,5];
console.log(numbers);

let michell= ['Michell', 'Tene', 19];
console.log(michell);

//akses index yang mana
console.log(michell[1]);

//cara hitung length/panjang array
console.log(numbers.length);

//akses elemen terakhir 
console.log(michell[michell.length-1]);

//Mengganti nilai array melalui index
michell[2] =20;
console.log(michell[michell.length-1]);

//Array di dalam array
let scores =[90,50,70];
let arrJohn =["john","doe",33,true,scores];
console.log(arrJohn);

//array elemen objek
let users =[
  {
    fullName :"john Doe",
    age:33,
    address: "Manado",
  },
  {
    fullName : "Stenly Adam",
    age:30,
    address : "mdc"
  },
]

//OBJECT
const john = {
    firstName: "john",
    lastName: "Doe",
    age: 33,
    isMarried: true,
    sayHello: function() {
        console.log("Hallo");
    }

};
console.log(john);

//2 cara Akses Properti Objek
     //dot notation
       console.log(john.lastName);
     //bracket notation
       console.log(john["isMarried"]);

//Menambahkan Property Objek
john.address = "Timika";          //dot notation
john["nationality"]="Indonesia"; //bracket notation
console.log(john);

john.sayHello();

