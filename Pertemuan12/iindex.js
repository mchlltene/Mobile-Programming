//CALABACK
//a.
function mandi() {
    console.log("Mandi");
}
//b.
function sarapan (){
    setTimeout(()=>{
        console.log("Sarapan ditunda 3 detik");
    },3000);
}

//c. 
function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}

//d.
mandi();
sarapan();
berangkatSekolah();

//e. 
function sarapan (callback){
    setTimeout(()=>{
        console.log("Sarapan ditunda 3 detik");
        callback(berangkatSekolah);
    },3000);
}
mandi()
sarapan(berangkatSekolah);

//f.
function sarapan (){
        console.log("Sarapan ditunda 3 detik");
}
mandi();
sarapan();
berangkatSekolah();

//PROMISE 
//a.
function helloWorld (){
    new Promise ((resolve)=>{
        console.log("Hello World");
    },2000);
}
helloWorld();

//b.
async function masseges (){
    const msg = await helloWorld();
    console.log(msg);
}

//c.
async function masseges (){
    setTimeout(()=>{
        const msg = await helloWorld();
        console.log(msg);
    },2000)
}
masseges();

//FETCH
const ambilDataUser = document.querySelectir ('.input-keyword');
fetch ('https://jsonplaceholder.typicode.com/users' + inputKeyword.value)
.then(response => console.log(response));
