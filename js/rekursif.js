function hitung(num){
    if(num === 0) return 1;
    return num * hitung(num-1);
}
console.log(
    hitung(4)
)