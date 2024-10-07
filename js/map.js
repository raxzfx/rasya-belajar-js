//membuat map
const nama = new Map();

const produk = new Map([
    ['nama','abibas'],
    ['harga',100],
    ['kembalian',100]
]);
console.log(produk);

//menyimpan nilai pada map
const x = new Map();
x.set('nama', 'jajang');
console.log(x);

//mengakses nilai pada map
const map = new Map();
map.set('nama','rasya');
console.log(map.get('nama'));

//menghapus nilai pada map
const a = new Map();
a.set('nama', 'agus');
a.set('lastname', 'anjing');
a.delete('nama');
console.log(a);