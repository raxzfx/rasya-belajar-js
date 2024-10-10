function cekNilaiUjian(nama, nilai, mapel){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(nilai >= 75){
                resolve(`selamat, ${nama} kamu lulus mata pelajaran ${mapel}`);
               } else{
                reject(`maaf, ${nama} kamu tidak lulus mata pelajaran ${mapel}`);
               }
        }, 1000);  
    })
}

cekNilaiUjian('jajang', 75, 'matematika')
   .then((message)=>{
     console.log(message);
   })
   .catch((error)=>{
     console.log(error);
   })

cekNilaiUjian('epul', 60, 'kobel')
    .then((message)=>{
      console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })