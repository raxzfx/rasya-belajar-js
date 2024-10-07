//ES6
class Smartphone {
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    charging(){
        console.log(`charging ${this.model}`);
    }
}

class Ios extends Smartphone{
    airdrop(){
        console.log('ios have a behavior airdrop');
    }
}

class Andro extends Smartphone{
    splitscreen(){
        console.log('android have a behavior split screen');
    }
}

const ios = new Ios('black','A','12 promeks');
const andro = new Andro('white','B','A32');

ios.charging();
ios.airdrop();

andro.charging();
andro.splitscreen();

