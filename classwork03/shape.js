class Shape{
    #name = "rectangle";
    constructor(name){
        this.#name = name
    }

    static getName() {
        return this.name;
    }
}

// let area = new Shape("rectangle");
// console.log(area.name); 
// console.log(Shape.getName()); 

module.exports = Shape;