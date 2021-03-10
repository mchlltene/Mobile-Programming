//Destrukturisasi 

//Arat (Caranya.Ambil sebagian item, Deklarasi & Assignment terpisah, Default value, Rest Operator)
const arrPerson = ['John', 'Doe',33,true,"Minahasa Utara"];

//ambil item array metode lama
// const firstName =arrPerson[0];
// const lastName = arrPerson[1];
// const age =arrPerson[2];
// const isMarried = arrPerson[3];

//pakai dstruktur!!!!!

// let [firstName, , age,isMarried, address="Timika"] = arrPerson; //hanya ambil index 0 dan 2 3 adress akan ambil yang didalam array
// console.log(firstName,age,isMarried,address);

let [firstName,lastName, ...rest] = arrPerson;
console.log(firstName,lastName);
console.log(rest);

    //OBJEK!!
const obPerson = {
    namaAwal : "MIchell",
    namaAkhir : "Tene",
    umur: 19,
    isMenikah:false,
    alamat : "Timika",
};
             //before!
// const namaAwal =obPerson.namaAwal;
// const namaAkhir=obPerson.namaAkhir;
// const umur = obPerson.umur;
// const isMenikah =obPerson.isMenikah

// const { namaAwal,namaAkhir,umur,isMenikah} = obPerson;
// console.log(namaAwal,namaAkhir);

// const {umur}= obPerson
// console.log(umur);   // cuma mau ambil umur

// ({namaAwal,namaAkhir, alamat="Timika"}= obPerson);
// console.log(namaAwal,namaAkhir,alamat);

const display = (obj) => `Hallo nama saya ${namaAkhir} ${lastName}`;
console.log(display(obPerson));