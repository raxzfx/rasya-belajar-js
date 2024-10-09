export function pesanMakanan(callback){
      const timer = 4000;

      const detik = timer / 1000;
      console.log(`pesanan akan mateng ${detik} detik lagi`);

     setTimeout(() => {

        console.log('pelayan akan segera mengantarkan makanan');

        callback();
      }, timer);
}

export function mengantarMakanan(callback){
    const timer = 2000;

    console.log('pelayan sedang mengantarkan makanan');

     setTimeout(() => {
        console.log('pelayan tiba di meja pemesan');
        callback()
    }, timer);
}