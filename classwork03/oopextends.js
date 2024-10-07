class Animal{
    #name = 'Adetayo"';//putting # makes it private provided the name is not used in the constructor
    #weight = 45;
    constructor(name){
        this.name = name
    }

    static getName(){
        return this.name
    }
}


let dog = new Animal("dog");
console.log(dog.name)


class Cat extends Animal{
    constructor(){
        super()
    }
}