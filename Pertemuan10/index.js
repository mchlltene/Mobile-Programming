           //Asyncronous -> menjalankan proses yagn lain dahulu daripada seblumnya//

         //Callback -> fungsi yang ada dalam parameter fungsi lain//
// function gretings (fullName){
//     console.log(`Hii ${fullName}`);
// }

// function introduction (firstName,lastName,Callback){
//     const fullName = `${firstName} ${lastName}`
//     Callback (fullName);
// }

// introduction('John','Doe',gretings); atau

// introduction ("John","Doe",(fullName) => {
//     console.log(`Hi ${fullName}`);
// });

// console.log("satu");
// setTimeout (()=>{
//     console.log("dua");
// },2000);
// console.log("tiga");

// function proses1(){
//     console.log("Proses 1 selesai di jalankan");
// }

// function proses2(Callback){
//     setTimeout(()=> {
//         console.log("Proses 2 selesai dijalankan");
//         Callback();
//     },200);
// }

// function proses3(){
//     console.log("Proses 3 selesai dijalankan");
// }

// proses1();
// proses2(proses3);

        //CALLBACK HELL
// setTimeout (()=>{
//     console.log("proses 1");
//     setTimeout (()=>{
//         console.log("Proses 2");
//         setTimeout(()=>{
//             console.log("Proses 3");
//             setTimeout (()=>{
//                 console.log("Proses 3");
//             },3000);
//         },2000);
//     },2000);
// },2000);

        //PROMISE
// let condition = true;


// let newPromise = new Promise ((resolve,reject)=>{
//     if (condition){
//         resolve("Berhasil");
//     }
//     else {
//         reject("Error");
//     }
// });

// newPromise
// .then((result)=>{
//     return result;
// })
// .then ((result2)=>{
//     console.log(`${result2}!!!`);
// })
// .catch ((error)=>{
//     console.log(error);
// })

     //PENERAPAN PROMISE

//  function getIdStudent (){
//       return new Promise ((resolve,reject)=>{
//           resolve ("12345");
//          });
//      }

//  function getNameByID (Id){
//      return new Promise ((resolve,reject)=>{
//            if (id==="12345"){
//             resolve ("John","Doe");
//         } else {
//             reject ("Unkwonwm ID Student");
//         }
//      });
//  }

//  getIdStudent().then ((id)=>{
//      return getNameByID(id);
//  }).then ((name)=>{
//      console.log(name);
//  })
//  .catch((error)=>{
//      console.log(error);
//  })

// getIdStudent()
// .then ((id)=>{
//     return getNameByID(id);
// });
// .then ((name)=> {
//     console.log(name);
// })
// .catch ((error)=>{
//     console.log(error);
// });


        //ASYCNAWAIT
const getNameByIDAsync = async () =>{
   try {
    const id= await getNameByID();
    cosnt name = await getNameByID (id);
    console.log(name);
   } catch (error){
       console.log(error);
   }
};

getNameByIDAsync();