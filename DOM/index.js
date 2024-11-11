let userDetails = {
    firstname : "Adetayo",
    lastname :  "Bravo",
    sex : "male"
}

let userInfo= {
    firstname : "Grace",
    lastname :  "Princess",
    sex : "Female"
}

let result = JSON.stringify(userDetails);
console.log(result) // send to the user server side

let data = '{"firstname": "Adetayo", "lastname": "Bravo", "sex": "Male"}';

let answer = JSON.parse(data);
console.log(answer)


let result01 = JSON.stringify(userInfo);
console.log(result01) // send to the user server side

let info = '{"firstname": "Grace", "lastname": "Princess", "sex": "Female"}';

let getResult = JSON.parse(info);
console.log(getResult)