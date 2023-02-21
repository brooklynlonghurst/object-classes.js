class Dog {
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.hypoAlergenic = false;
    }
    //create a method on a class (including hypoAlergenic)
    updateHypo(){
        this.hypoAlergenic = true;
    }

    //creat second method using string and calling on variables (this.name)
    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.breed}`);
    }
}

//create new instance of Dog
const dog1 = new Dog("Buddy", "golden retriever", 5);
const dog2 = new Dog("Alaska", "cockapoo", 3);

dog2.updateHypo();

console.log(dog1);
console.log(dog2);

dog1.greeting();

//extend class
class Puppy extends Dog{
    constructor(name, breed, age, color){
        super(name, breed, age) //values you want to inherit from parent class (Dog)

        this.color = color;
        this.trainingLevel = 0
    }

    //create method to update training level
    updateTraining(num){
        this.trainingLevel += num;
    }
}

//create instances of Puppy class
const puppers = new Puppy("Kevin", "Yorkshire terrior", .6, "brown/black");
const bubs = new Puppy("Wanda", "Irish Setter", 1, "golden/brown" );

//update method for puppers & bud
puppers.updateHypo();

bubs.updateTraining(1);

console.log(puppers);
puppers.greeting();

console.log(bubs);
bubs.greeting();


