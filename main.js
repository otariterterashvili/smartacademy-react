class Person {
  constructor(age, name) {
    this.age = age
    this.name = name
  }
  getName() {
    return this.name
  }
}

// create new person object
const person = new Person(21, "oto")

function Person(name, age) {
  this.name = name
  this.age = age
  this.getAge = (plusAge = 20) => {
    return this.age + plusAge
  }
}

person = new Person("oto", 12)

personObject = Object.create(person)

console.log(personObject.__proto__.getAge(100))
