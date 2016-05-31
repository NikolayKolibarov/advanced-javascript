/**
 * Created by NikolayNK on 15.2.2016 г..
 */

function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;


    return {
        firstName: this._firstName,
        lastName: this._lastName,
        fullName: this._firstName + ' ' + this._lastName
    };
}

var peter = new Person('Peter', 'Jackson');
console.log(peter.fullName);
console.log(peter.firstName);
console.log(peter.lastName);



