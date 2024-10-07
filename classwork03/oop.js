class Calculator{
    constructor(numberOne, numberTwo){
        this.numberOne = numberOne
        this.numberTwo = numberTwo
    };

    add () { 
        return this.numberOne + this.numberTwo;
    };

}

module.exports = Calculator;