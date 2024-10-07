// object composition

class Mobil{
    constructor (mesin, roda, body) {
    this.mesin = mesin;
    this.roda = roda;
    this.body = body;
    }

    canMove() {
     console.log(`bisa bergerak`);
    }
}

function mesinNyala(mobil){
      return{
        nyala: () => {
            console.log('mesin nyala');
        }
      }
}

function mesinMati(mobil){
    return{
        mati: () => {
             console.log('mesin mati');
        }
    }
}

function rodaBerputar(mobil){
    return{
        berputar: () => {
            console.log('roda berputar');
        }
    }
}

function warnaBody(mobil){
    return{
       warna: () =>{
        console.log('mobil ini berwarna merah');
       }
    }
}

function createMobil(mesin, roda, body){
      const mobil = new Mobil(mesin, roda, body);
      return Object.assign(
        mobil, 
        mesinNyala(mobil), 
        mesinMati(mobil), 
        rodaBerputar(mobil), 
        warnaBody(mobil)
      );
}

const mobilBaru = createMobil('mesin 2jz', 'roda sepeda', 'rocket bunny')

mobilBaru.canMove();
mobilBaru.nyala();
mobilBaru.mati();
mobilBaru.berputar();
mobilBaru.warna();