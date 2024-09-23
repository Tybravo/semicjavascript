let testScores = [34,87,56,73,81,55,82,53,70,91];
function passMark(){
    return testScores.filter(number => {
        if(number > 70){
         return number
        } 
    })
}


let examGrade = [85,92,78,88,95];
function addPoint(){
    let result = examGrade.map((number) => number + 5);
    return result; 
}


let integersNum =  [2,4,6,8,10];
function squareNum(){
    let result = integersNum.map((number) => number ** 2 );
    return result; 
}


let arrayTime = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00PM", "5:00PM"];
function classTiming(){
    return arrayTime.filter(number => {
        if(number != "9:00 AM" && number != "11:00 AM"){
         return number
        } 
    })
}




let arraypPerson = ["Emily", "Jack", "Sophia", "Daniel"];
function distribute(){
    //arraypPrson.forEach((element, index) => {
        for(let obj in arraypPerson){
        return arraypPerson.map(obj => obj[{maths: "Emily", english: "Jack", biology: "Sophia", economics: "Daniel"}])
    //})
        }
}

    // let distribute = (arraypPerson)=> {
    //     return arraypPerson.map(obj => obj[{maths: "Emily", english: "Jack", biology: "Sophia", economics: "Daniel"}])
    // }
    
// let arrayPerson = ["Emily", "Jack", "Sophia", "Daniel"];

// function distribute() {
//     let subjects = { maths: "Emily", english: "Jack", biology: "Sophia", economics: "Daniel" };
//     return arrayPerson.map(person => subjects);
// }


// function distribute(array){
//     const object = {};
//     let books = ["Emily", "Jack", "Sophia", "Daniel"];
//     for(let obj of array){
//         for (let index of books){
//             object[obj] = index;
//         }
//     }
//     return object;
// }



module.exports = {passMark,addPoint,squareNum,distribute,classTiming};