// //dot
// const user = {name : 'ujang jajang asep',
//     'last name' : 'cukimay',
//     umur : 50,
// };
// console.log(user.name);

// //square breacket []
// const user = {name : 'ujang jajang asep',
//     'last name' : 'cukimay',
//     umur : 50,
// };
// console.log(user.name,user['last name']);

//destructuring object: menyimpan nilai properti dalam objek ke dalam variabel
const user = {
    'name' : 'ijal jajang asep',
    'lastname' : 'babang',
    umur : 50,
};

const {name, lastname, age=false} = user;
console.log(age);

const barang = {
    namaBarang : 'dildo',
    harga : 500000,
    type : 'segs toy',
}
barang.harga = 300000;
const {namaBarang, harga, type} = barang;
console.log(namaBarang, harga, type);

//untuk delete properti dalam objek menggunakan kata kunci 'delete', contoh : delete barang.harga; , selain menggunakan
//dot (.) bisa juga dilakukann dengan menggunakan kurung siku ([]), contoh : delete barang['harga'];

//untuk mengubah value atau nilai pada key dalam properti bisa dilakukan dengan cara menuliskan nama object
//di ikuti dengan tanda titik dan nama key yang ingin di rubah valuennya