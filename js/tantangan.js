//1
// function lat1(a,b){
//   return a.includes(b) ? b+a : a+b;
// }
//  console.log(lat1('lips','s'));

 //2
 function lat2(angka){
     return angka % 2 === 0 ? true : false;
 }

 console.log(
    lat2(9)
 );

 //3
 function lat3(a,b){ 
   return b.split(a).length - 1
 }
 console.log(
    lat3('h', 'how many character in this paragraph')
 )