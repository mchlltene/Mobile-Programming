//a.
function mandi () {
    console.log("Mandi");
}

//b.
function sarapan (){
    setTimeout(()=>{
        console.log("Sarapan Tertunda 3 Detik");
    },3000);
}


//c. 
function berangkatSekolah () {
    console.log("Berangkat Sekolah");
}

//d.
mandi();
sarapan();
berangkatSekolah();

// //e.
function sarapan (callback){
    setTimeout(()=>{
        console.log("Sarapan Tertunda 3 Detik");
        callback ();
    },3000);
}


//f.
mandi();
sarapan(berangkatSekolah);


//PROMISE
//a. 
 function helloWorld (){
      return new Promise ((resolve,reject)=>{
          resolve ("Hello World");
         },2000);
     }


