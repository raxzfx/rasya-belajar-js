function ambilData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const berhasil = true;
            if(berhasil){
               resolve ({nama : 'ahmad', umur : 20});
            } else{
               return reject('pengambilan data gagal: timeout');
            }
        }, 2000);
    })
}

ambilData()
    .then((data)=>{
       console.log('data berhasil diambil ' + JSON.stringify (data));
    })
    .catch((error)=>{
       console.log('data gagal ' + error);
    })