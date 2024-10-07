//for loop
var i = '';

for(var s = 0; s<10; s++){
    for(var x = 0; x<= s; x++){
        i += '*';
    }
    i += '\n';
}
console.log(i);
for(var s = 10; s>0; s--){
    for(var x = 0; x< s; x++){
        i += '*';
    }
    i += '\n';
}
console.log(i);

// for in
const jangliaw = {
    nama : 'epul',
    umur : '500',
    rumah : 'bandung'
};

for(const property in jangliaw){
   console.log(`${property} bernilai ${jangliaw[property]}`);
}

//for off
const momog = ['jajang','epul']
for(const item of momog){
   console.log(item);
}