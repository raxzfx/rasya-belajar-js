const user = new Array('supri');
console.log(user);

const pengguna = Array.from('jajang');
console.log(pengguna);

const x = new Array('supri','eko','asep');
const y = Array.from(x);
console.log(y);

const z = ['apel','jambu','mangga'];
console.log(z[2]);

//untuk mengakses elemen pada array bisa dilakukan dengan cara menggunakan no indeksnya, index merupakan angka
//yang digunakan untuk ke nilai di dalam array, nilai indeks sendiri diawali dengan nomor 0, contoh pada array z
// 0 = apel, 1 = jambu, 2 = mangga, untuk mengakses nilai pada array bisa menggunakan kurung siku [] dan diisi nomor indeksnya
//jika mengakses no indeks yang berada di luar indeks, akan menghasilkan undefined

//manipulasi element array
const angka = [1,2,3,4,5,6,7];
angka[1] = 20;
console.log(angka); 

//untuk mengubah element pada array, bisa menggunakan metode indexing, dengan cara menuliskan nama array
//dilanjut denga tanda kurung siku[] dan diisi no index element yang ingin kita rubah, contoh di atas 
// menggunakan metode indexing

//metode push
const jelema = ['asep','budi','jajang'];
jelema.push('yadi');
console.log(jelema);

//berguna untuk menambahkan element baru dalam array, dengan menggunakan metode push, dengan cara menuliskan nama array
//lalu menggunakan kata kunci push dilanjut dengan menuliskan kurung buka dan tutup, contoh arrayName.push(element);

//menghapus element
const a = ['kamu','kacung','sekali'];
// delete a[1];
// a.splice(1,1);
// a.pop();
// a.shift();
console.log(a);

//dalam menghapus element pada array ada 4 cara yaitu delete, splice, shift, dan pop, masing masing memiliki fungsi tersendiri
//delete. delete hanya akan menghapus 1 element pada array tergantung index yang ingin di hapus, cara penggunaannya yaitu dengan 
//menuliskan kata kunci delete lalu nama dari arraynya lalu menuliskan kurung siku[indeks ke brp]

//splice. splice bisa menghapus banyak array, dengan cara menuluskan kata kunci nama array lalu splice(indeks, jumlah)

//shift. shift hanya akan menghapus element pertama saja
//pop hanya akan menghapus element terakhir saja

//destructuring array
const namaOrang = ['jajang','agus'];
const [first, second] = namaOrang;
console.log(first, second);

//method array
const namaMobil = ['apansa','hino dutro','deni cagur'];
// namaMobil.reverse();
namaMobil.sort();
console.log(namaMobil);