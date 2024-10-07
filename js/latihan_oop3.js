//encapsulation
class Student{
    #name;
    #examScore;

    setName(name){
        this.#name = name
    }
    setExamScore(score){
      if(score >= 60){
      this.#examScore = score;
      } else{
        console.log('kamu ga lulus');
      }
    }

    getExamScore(){
        return this.#examScore
    }

    getName(){
        return this.#name
    }

    hasPassed(){
        return this.#examScore >= 60;
    }
}

const student = new Student();

student.setName('irfa');
student.setExamScore(70);

console.log(`nama kamu adalah ${student.getName()} dan nilai dia ${student.getExamScore()}`);
console.log(`apakah ${student.getName()} lulus ? ${student.hasPassed() ? 'ya' : 'tidak'} `);