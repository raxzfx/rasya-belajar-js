//inheritance
class Animal{
     constructor(name){
        this.name = name;
     }

     speak(){
        console.log(`animal speak`);
     }
     nama(){
        console.log(`his name is ${this.name}`);
     }
}

class Dog extends Animal{
    speak(){
       return 'woof';
    }
}

class Cat extends Animal{
    speak(){
       return 'meow';
    }
}

const dog = new Dog('epul');
const cat = new Cat('bleki');

dog.nama()
console.log('and his sound like ', dog.speak());

cat.nama()
console.log('and his sound like ', cat.speak());