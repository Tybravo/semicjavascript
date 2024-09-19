const {evenNumber, getfruitlength, multiplyByTwo, getNames} = require("./arrayAdvancedMethod");

    test("Test for even numbers",()=> {
		let arrayNumbers = [3,4,5,6,7,8];
		let result = evenNumber(arrayNumbers);
        let expected = [4,6,8];
		expect(result).toEqual(expected);
    });

    test("Test that fruit length is greater than five",()=> {
        let fruits = ["Banana", "Orange", "Pears"]
        let result  = getfruitlength(fruits);
        let expected = ["Banana", "Orange"];
        expect(result).toEqual(expected);
    });

    test("Map to multiply by two through array of numbers",()=> {
        let array01 = [3,4,5,6,7,8];
        let result = multiplyByTwo(array01);
        let expected = [6,8,10,12,14,16];
        expect(result).toEqual(expected);

    });

    test("Map through an array of objects",()=> {
        let arr02 = [{name: "John", age: "23"}, {name: "Jane", age: "27"}];
        let result = getNames(arr02);
        let expected = ["John", "Jane"];
        expect(result).toEqual(expected);

    });