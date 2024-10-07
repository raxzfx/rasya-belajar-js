// //function statement
// const angka = prompt("masukan angka");
// function kacung(angka){
// const hitung = 5 * Number(angka);
// console.log(hitung);
// }
// kacung(angka);
// kacung(7);


// //return
// const apa = prompt("masukan angka"); 
// function ajg(apa){
//    const hasil = 5 * Number(apa);
//    return hasil 
// }

// const iya = ajg(apa);
// console.log(iya);

// function kata(){
//     return "kamu ganteng";
//     console.log("asdadsa");
// }
// const atak = kata();
// console.log(atak);

// //expression function
// const input = prompt("masukan angka");
// const anjay = function(input){
//     const hasil = 5 * Number(input);
//     return hasil;
// }

// const apa1 = anjay(input);
// console.log(apa);

// function kk(x){
//    return function(y){
//    return x * y;
//    }
// }

// const ajg1 = kk(6);
// console.log(ajg1(20));

// //arrow function
// const joko = (x) => {
//     const result = 5 * x;
//     return result;
// }

// const gibran = joko(10);
// console.log(gibran);

function hello(name,origin="bandung"){
    return `halo! nama saya ${name}. saya tinggal di ${origin}. `;
  }
  const rahmat = hello("Rahmat","semarang");
  console.log(rahmat);
  const indra = hello("indra");
  console.log(indra);