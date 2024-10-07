// var angkot = 1;
// var jumangkot = 6;

// while(angkot <= jumangkot){
//     console.log('angkot no.' + angkot +' beroprasi dengan baik');
//     angkot++
// }

// for(let i = 7; i<=10;    i++){
// console.log('angkot no.' + i + ' sedang tidak beroprasi');
//  }

// let nomorangkot = 1;
// let jumlahangkot = 10;
// let angkoton = 6;

// for(nomorangkot=1; nomorangkot<=jumlahangkot; nomorangkot++){
//    if(nomorangkot<=angkoton){
//      console.log('angkot no.' +nomorangkot+ ' sedang beroprasi');
//    } else{
//     console.log('angkot no.' +nomorangkot+ ' tidak berjalan');
//    }
// }

let noAngkot = 1;
let jumAngkot = 10;
let angkotAktif = 6;

for(noAngkot = 1; noAngkot<=jumAngkot; noAngkot++){
   if(noAngkot<=angkotAktif && noAngkot!==5){
      console.log('angkot no.' +noAngkot+' aktif');
   } else if(noAngkot==8 || noAngkot== 10 || noAngkot==5 ){
      console.log('angkot no.' +noAngkot+' lembur');
   } else{
      console.log('angkot no.' +noAngkot+' tidak aktif');
   }
}