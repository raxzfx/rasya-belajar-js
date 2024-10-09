export function promiseExecute(resolve, reject){
     setTimeout(() => {
        console.log('baju sedang di proses');

        const number = Math.random();

        if(number < 0.3){
           resolve('baju selesai');
        } else{
            reject('baju kamu masi ada yang kotor');
        }
        
     }, 500);
}

export function doSomething(){
    return new Promise(promiseExecute);
}