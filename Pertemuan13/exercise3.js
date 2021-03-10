//CLASS
//a
class Orang {
    constructor (){

    }
}

//b
class Orang {
    constructor(nama,umur){
        this.nama = nama;
        this.umur = umur;
    }
}

//c
class Orang {
    constructor(nama,umur){
        this.nama = nama;
        this.umur = umur;
    }
    bekerja (){
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
}

//d
const user1 = new Orang ("Michell","19 Tahun");

//e
user1.bekerja();

//INHERITANCE
//a
class Orang {
    constructor(nama,umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        console.log(`${this.nama} sedang tidur`);
    }
    makan(){
        console.log(`${this.nama} sedang makan`);
    }
}

//b
class Pelajar extends Orang {
    constructor (){

    }
}

//c
class Pelajar extends Orang {
    constructor(){

    }

}

//d
class Pelajar extends Orang {
    constructor (nama,umur,namaSekolah){  
    }
}

//e
class Pelajar extends Orang {
    constructor (nama,umur,namaSekolah){
        super(nama,umur);
    }
}

//f
class Pelajar extends Orang {
    constructor (nama,umur,namaSekolah){
        super(nama,umur);
        this.namaSekolah;
    }
}

//g
class Pelajar extends Orang {
    constructor (nama,umur,namaSekolah){
        super(nama,umur);
        this.namaSekolah=namaSekolah;
    }
}

//h
class Pelajar extends Orang {
    constructor (nama,umur,namaSekolah){
        super(nama,umur);
        this.namaSekolah= namaSekolah;
    }
    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}

//i
const user = new Pelajar ("John","17","Unklab");

//j
user.belajar();

