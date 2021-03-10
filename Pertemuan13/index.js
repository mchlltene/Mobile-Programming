//todo OOP in Javascript
//todo Object Reteral
// const mobil1 = {
//     merek : "Toyota",
//     warna : "Putih",
//     nyalakanMobil : function(){
//         console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
    
//     }
// }
// const mobil2 = {
//     merek : "Honda",
//     warna : "Putih",
//     nyalakanMobil : function(){
//         console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
    
//     }
// }

// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//todo OBJECT CLASS
class Mobil {
    constructor(merek,warna){
        this.merek = merek;
        this.warna = warna;
    }
    nyalakanMobil (){
        console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);

    }
}

const mobil1 = new Mobil ("Toyota","Putih");
const mobil2 = new Mobil ("Honda","Merah");
mobil1.nyalakanMobil();
mobil2.nyalakanMobil();

//Inheritance
class Toyota extends Mobil {      //?hubungan sama kayak OOP (pubic)
    constructor(merek,warna,mesin){
        super(merek,warna)        //?memanggi constructure kelas atas
        this.mesin = mesin;
    }
    nyalakanMobil(){
        console.log(`Mobil dengan merek ${this.merek} dan ${this.mesin} sudah dinyalakan`);
    }
    matikanMesin(){
        console.log('Matikan Mesin');
    }
}

const agya = new Toyota ("Agya","Putih","1000cc");
const avanza = new Toyota ("Avanza","Hitam","1300cc");

agya.nyalakanMobil();
avanza.nyalakanMobil();
avanza.matikanMesin();

class Button extends Component {
    ComponentDidMount (){
        
    }
}