//membuat set
const jajang = new Set();

const nama = new Set(['asep', 'agus']);
console.log(nama);

//menyimpan nilai di set
const x = new Set();
x.add('ajg');
console.log(x);

//mengakses set
const y = new Set();
y.add(1);
y.add(2);
y.add(3);

// for(const number of y){
//    console.log(number);  
// }
y.forEach((value) => console.log(value));

//menghapus nilai pada set
const z = new Set();
z.add(1);
z.add(2);
z.delete(1);
console.log(z);