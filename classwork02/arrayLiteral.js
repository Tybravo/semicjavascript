let array = [1,2,3,4,"hello",true] //Array Literal
console.log(array)

let newArray = new Array(3);
newArray [0] = 10;
newArray.push(2);
newArray.push(3);
newArray.push(5);
newArray.push(7);
console.log(newArray);

let result = Array.from('semicolonj');
console.log(result);

let answer = Array.of(1,2,3,4,5,6,7,8)
console.log(answer)

let arrayOfNumbers = [1,2,3,4,5,6,7,8];
let slice = arrayOfNumbers.slice(-2);
let sliceIt = arrayOfNumbers.slice(2, 5);

console.log(slice)
console.log(sliceIt)
console.log()


let arrayOfNumbers01 = [1,2,3,4,5,67];
let arr = [7,4,5,9];
let answer01 = arrayOfNumbers01.splice(1,3, ...arr);

console.log(arrayOfNumbers01);
console.log(answer01)



