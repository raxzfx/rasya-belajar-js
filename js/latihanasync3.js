function cekUsia(usia){
    return new Promise((resolve, reject)=>{
     if(usia >= 18){
       resolve('kamu sudah dewasa');
     } else{
        reject('kamu belum cukup umur');
     }
    });
}

cekUsia(18)
   .then((message)=>{
     console.log(message);
   })
   .catch((error)=>{
     console.log(error);
   })

cekUsia(15)
   .then((message)=>{
     console.log(message);
   })
   .catch((error)=>{
     console.log(error);
   })