let arrayOfNumbers = [2,3,4,5,6,7]

function sumNumInTwos(arrayOfNumbers) {
    let sumNumbers = 0;

    let array = [];
    
    for(let index = 0; index <= arrayOfNumbers.length; index++){
        sumNumbers += arrayOfNumbers[index];
        if(index % 2 != 0){
            array.push(sumNumbers);
            sumNumbers = 0;
        }
          
    }
    return array;
}

//let result = sumNumInTwos(arrayOfNumbers)
//console.log(result);

module.exports = {sumNumInTwos};