function echo<T>(arg: T): T {
  return arg;
}


/** We want to reuse classes, use modules */
// class CustomPerson {
//   firstName: string;
//   lastName: string;

//   constructor(firstName = "lala", lastName = "lolo") {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

import { oldPerson as CustomPerson } from "./classes";

class Admin extends CustomPerson {

};

function echoPerson(person: CustomPerson): CustomPerson {
    return person;
}

var admin = new Admin();

var f = echoPerson(admin); // I ve lost information, its person now, not admin

function betterEchoPerson<T extends CustomPerson>(person:T):T {
    return person;
}

var g = betterEchoPerson(admin);