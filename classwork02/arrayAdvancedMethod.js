let arr01 = [3,4,5,6,7,8];

arr01.forEach((element, index) => {
    let answer02 = element * 2;
    console.log(answer02)
    console.log(index)
})


let arr02 = [3,4,5,6,7,8];
let fruits = ["Banana", "Orange", "Pears"]

function evenNumber(){
    return arr02.filter(number => {
        if(number % 2 == 0){
         return number
        } 

    
    })

}

function getfruitlength(array){
        let answer = array.filter(fruit => fruit.length > 5)
        return answer;
    }

function multiplyByTwo(array01) {
    let result = array01.map((number) => number * 2);
    return result;
}

let getNames = (arr02)=> {
    return arr02.map(obj => obj["name"])
}


module.exports = {evenNumber, getfruitlength, multiplyByTwo, getNames};
