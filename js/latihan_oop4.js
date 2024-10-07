//polymorphism
class Animal{
    makeSound(){
        console.log('animal is making sound');
    }
}

class Dog extends Animal{
    makeSound(){
        // super.makeSound();
        console.log('woof');
    }
}

class Cat extends Animal{
    makeSound(){
        // super.makeSound();
        console.log('meow');
    }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();
