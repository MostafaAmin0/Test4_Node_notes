const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN",
    fullName: function (value) {
        return this.firstName + " " + this.lastName + " " + value;
    },
    get fullNameGetter() {
        return this.firstName + " " + this.lastName;
    },
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
};

//Dot notation
console.log(person.firstName);
//Bracket notation
console.log(person['firstName']);

console.log(person.fullNameGetter);
console.log(person.fullName("alo"));

person.lang = 'ar';
console.log(person.language);


function myFunction(x, y = 10) {
    return x + y;
}
console.log(myFunction(5));

//arrow function

var x = (x, y = 10) => {
    return x + y;
};

console.log(x(5));

