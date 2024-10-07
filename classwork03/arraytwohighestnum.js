let numbers = [2,3,5,1,7];

function twoHighest(){
    let largest = numbers[0];
    let nexttLargest = numbers[1];
    
    for(let index = 1; index < numbers.length; index++){
        if(numbers[index] > largest){
            largest = numbers[index];
        }
       /* if(numbers[index] > nexttLargest){
            nexttLargest = numbers[index];
        }*/

        return [largest];
    }

}

let result = twoHighest(numbers);

let getArray = [result.largest];
console.log(getArray);

