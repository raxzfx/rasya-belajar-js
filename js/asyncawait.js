//hanya bisa dipakai jika menggunakan function

function cekKetersediaanBuku(judulBuku, jumlahBuku){
      return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(jumlahBuku > 0 ){
                   resolve(`buku ${judulBuku} tersedia. jumlah yang diminta: ${jumlahBuku}`);
                } else{
                    reject('jumlah buku yang di minta tidak valid');
                }
            }, 2000);
      })
}

async function pesanBuku(judulBuku, jumlahBuku) {
    try{
        const hasil = await cekKetersediaanBuku(judulBuku, jumlahBuku);
        console.log(hasil);
    }
    catch (error){
        console.log(error);
    }
}

pesanBuku('jajang love tati', 2);