// function iya(...aguslovenjang){
//     console.log('aguslovenjang',aguslovenjang);
// }
// iya('asep sayang jajang','agus pacar jajang');

// function jang(jajang,...agus){
//      console.log('jajang sayang sama agus', jajang);
//      console.log('agus juga sayang jajang',agus);
// }
// jang('banget', 'yadi', 'ronz');

// function pulz(...yadz){
//         console.log(yadz.length);
//         console.log("epul suka", yadz);
// }
// pulz('ewean', 'tawuran', 'mabok');

const epul = ['raja momok','raja kokop','suka ewean', 'juragan club'];
const [pertama, kedua,...rest] = epul;
console.log('epul adalah',pertama);
console.log('epul adalah',kedua);
console.log('dan juga',rest);