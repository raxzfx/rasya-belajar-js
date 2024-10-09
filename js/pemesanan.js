import {pesanMakanan, mengantarMakanan} from '../js/functionpesan.js'

console.log('saya memesan cuki goreng');

pesanMakanan(() => {

    mengantarMakanan(() => {

    console.log('pesanan tiba');
    console.log('dan saya memakan habis cuki gorengnya');
})
});