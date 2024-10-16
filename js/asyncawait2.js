function ambilDataUser(userld){
     return new Promise((resolve, reject)=>{
       setTimeout(() => {
        if(userld > 0){
            resolve({
                id : userld,
                nama : 'andi',
                email : "andikacung@gmail.com"
            });
        }else{
            reject('user tidak ditemukan');
        }
       }, 3000);
     })
}

async function tamilkanDataUser(userld) {
    try{
        const dataUser = await ambilDataUser(userld);
        console.log(dataUser);
    }
    catch (error){
        console.log(error);
    }
}

tamilkanDataUser(0)