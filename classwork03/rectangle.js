
class Shape {
    constructor(name, side1, side2){
        this.name = name
        this.side1 = side1
        this.side2 = side2
    };
}



class Rectangle extends Shape {
    constructor(name, side1, side2) {
        super(name, side1, side2);
    }

    getArea() {
        let area = this.side1 * this.side2;
        return area;
    }

    isSqarish() {
        return this.side1 == this.side2;
    }
}



module.exports = Rectangle;
