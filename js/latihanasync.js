function chooseLaptop(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('memilih laptop');
            
            const isAvailable = Math.random() > 0.3;
            if(isAvailable){
               resolve('laptop tersedia');
            } else{
                reject('laptop tidak tersedia');
            }
        }, 1000);
    });
}

function processPayment(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('memilih metode pembayaran');
            console.log('pembayaran di proses');
            
            const isSuccess = Math.random() > 0.2;
            if(isSuccess){
              resolve('pembayaran berhasil');
            } else{
                reject('pembayaran gagal');
            }
        }, 1000);
    });
}

function confirmOrder(){
    return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('pesanan di konfirmasi');
            resolve('pesanan berhasil di konfirm');
          }, 1000);
    });
}

function shipLaptop(){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        console.log('pesanan di antar kurir');
        
        resolve('pesanan sampai di rumah');
     }, 5000);
    });
}

chooseLaptop()
    .then((massage) => {
     console.log(massage);
     return processPayment();
    })
    .then((massage) => {
        console.log(massage);
        return confirmOrder();
    })
    .then((massage)=>{
        console.log(massage);
        return shipLaptop();
    }) 
    .then((massage)=>{
        console.log(massage);
    })
    .catch((error)=>{
        console.log('proses gagal' + error);
    });