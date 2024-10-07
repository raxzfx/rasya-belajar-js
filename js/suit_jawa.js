//pilihan player
var p = prompt('pilihan : gajah, semut, orang');

//pilihan komputer
//random
var comp =  Math.random();

if(comp < 0.34){
   comp = 'gajah';
} else if( comp >= 0.34 && comp < 0.67 ){
    comp = 'orang';
} else{
    comp = 'semut';
}

var hasil='';
//rules
if(p == comp){
    hasil = 'seri';
} else if(p == 'gajah'){
//    if(comp=='orang'){
//     hasil = 'menang';
//    } else{
//     hasil = 'kalah';
//    }
hasil = (comp == 'orang') ? 'menang' : 'kalah';
} else if(p=='orang'){
    hasil = (comp == 'gajah') ? 'kalah':'menang';
} else if(p=='semut'){
    hasil = (comp== 'orang')?'kalah':'menang';
} else{
    hasil = 'memasukan pilihan yang salah';
}

//hasil
alert('kamu memilih ' +p+' dan komputer memilih ' +comp+ '\n maka hasilya kamu ' +hasil);