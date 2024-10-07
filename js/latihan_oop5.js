//object composition

class Komputer{
    constructor(cpu, monitor, keyboard){
        this.cpu = cpu;
        this.monitor = monitor;
        this.keyboard = keyboard;
    }

    canHurung(){
       console.log('bisa hurung');
    }
}

function cpuMadep(komputer){
    return{
        cpuHurung:()=>{
            console.log('hurung cpuna')
        }
    };
}

function monitorBadag(komputer){
    return{
        monitorHurung:()=>{
            console.log('monitor na hurung bos');
        }
    }
}

function keyboardBerfungsi(){
    return{
        keyboardHurung:()=>{
            console.log('bisa di tekan');
        }
    }
}

function createKomputer(cpu,monitor,keyboard){
    const komputer = new Komputer(cpu,monitor,keyboard);
    return Object.assign(
        komputer,
        cpuMadep(komputer),
        monitorBadag(komputer),
        keyboardBerfungsi(komputer)
    );
}

const komputerBaru = new createKomputer('agus');

komputerBaru.cpuHurung()
komputerBaru.monitorHurung()
komputerBaru.keyboardHurung()
