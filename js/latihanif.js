// no 1
const jumlahBelanja = prompt('masukan jumlah pembelanjaan');
let diskon = 0;

if(jumlahBelanja > 500000){
     diskon = 0.2;
} else if(jumlahBelanja => 300000 && jumlahBelanja <= 500000 ){
     diskon = 0.1;
} else{
     diskon = 0;
}

let totalBelanja = jumlahBelanja - (jumlahBelanja * diskon);
console.log('anda mendapatkan diskon ' + diskon * 100 + '%');
console.log('jumlah belanja anda adalah Rp.' + jumlahBelanja);
console.log('total yang anda harus bayar adalah Rp.' + totalBelanja);


 
//no 2
const usia = prompt('masukan umur anda');
let kategori;

if(usia < 12){
    kategori = 'anak anak';
} else if(usia >= 12 && usia <= 17){
   kategori = 'remaja';
} else if(usia >= 18 && usia <=60){
   kategori = 'dewasa';
} else if(usia > 60 && usia <= 100){
   kategori = 'lansia';
} else{
   kategori = 'maot';
}

console.log('umur anda adalah ' + usia + ' dan anda masuk di kategori ' +kategori);



//no 3
const nilai = parseFloat(prompt('masukan nilai anda'));
let grade;

if(nilai >= 90 && nilai <=100){
   grade = "A";
} else if(nilai >= 80 && nilai < 90){
   grade = "B";
} else if(nilai >= 70 && nilai < 80){
   grade = "C";
} else if(nilai >= 60 && nilai < 70){
   grade = "D";
} else{
   grade = "E";
}

console.log('nilai akhir anda '+nilai+' dan anda mendapatkan grade ' +grade);



//no 4
const tahun = parseInt(prompt('masukan tahun'));
let kabisat;

if(tahun % 4 === 0){
   kabisat = true;
} else if(tahun % 100 ===0){
   kabisat = false;
} else if(tahun % 400 ===0){
   kabisat = false;
}

if(kabisat){
   console.log('tahun ' +tahun+ ' adalah tahun kabisat');
} else{
     console.log('tahun ' +tahun+ ' bukan tahun kabisat');
}


