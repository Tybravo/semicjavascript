//All Objects are prototypes

let animal = {
    name : "unknown",
    color: "black",
    sound: function(){
        return `${this.name} makes a sound`
    }
}

console.log(animal)
let dog = Object.create(animal);
dog.name = "bullDog";
dog.color = "brown";
dog.numerOflegs = 4;
console.log(dog)

let cat ={}
let frenchCat = Object.setPrototypeOf(cat, animal);
//frenchCat.name
console.log(frenchCat)
console.log(frenchCat.name);


let tiger = {
    name : "nigeriaTiger",
    sex : "unknown",
    _proto_ : animal
}

let lion = {
    _proto_ : animal,
}

//All the attriutes of animal are in tiger and lion
console.log(tiger._proto_.name)


