//It is always advice to use a class for this declaration and  implementation and not a function

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}
 this.great = ()=>{
    return `${this.name}  says hello`
 }

 this.setName = (name)=>{
    this.name = name;
 }

let personOne = new Person("Adetayo", "Male")
console.log(personOne.name)
//personOne.setName("sam")
console.log(personOne.name)

module.exports = Person;