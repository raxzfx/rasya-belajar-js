//encapsulation
class Person{
    #age;
    #name;

    setName(name,behavior){
    this.#name = name;
    this._behavior = behavior
    }

    behavior(){
        return "suka ngeloco";
    }

    setAge(age){
    this.#age = age;
    }

    getName(){
    return this.#name;
    }

    getAge(){
    return this.#age;    
    }
}

const person = new Person();

person.setAge(500);
person.setName('jajang');

console.log(`nama dia ${person.getName()} dia suka ${person.behavior()} dan umur dia ${person.getAge()}`);
