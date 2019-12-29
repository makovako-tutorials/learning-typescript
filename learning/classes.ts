export class oldPerson {
  firstName: string;
  lastName: string;

  constructor(firstName = "lala", lastName = "lolo") {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

var aPerson = new oldPerson();

var bPerson: oldPerson = new oldPerson(); // but here works implicit typing

aPerson.firstName = "Lala";
aPerson.lastName = "Lolo";

console.log(aPerson.getFullName());

class Person {
  firstName: string;
  lastName: string;
  private Test: string;
  greet() {
    this.Test = 'lala';
    console.log(`Hello Person`);
  }
}

class Programmer extends Person {
  greet() {
    console.log("Hello Programmer");
  }

  greetLikeNormalPeople() {
    super.greet();
  }
}

var aProgrammer = new Programmer();
var cPerson = new Person();

var aProgrammerPerson: Person = new Programmer();

aProgrammer.greet();
cPerson.greet();
aProgrammerPerson.greet();
aProgrammer.greetLikeNormalPeople();

interface PersonInterface {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

class ConcretePerson implements PersonInterface {
  firstName: string;
  lastName: string;
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let dPerson: PersonInterface = new ConcretePerson();

let someObj = {
  firstName: "Lalo",
  lastName: "Lola",
  getFullName: () => "Test"
};

aPerson = someObj; // it works it has the same structure

class anotherPerson{

    // This automatically creates private properties of the same name and assign given values
    constructor(private myProperty: string){

    }
}


