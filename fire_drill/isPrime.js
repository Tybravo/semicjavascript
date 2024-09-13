let number = 10

function isPrimeNum(number) {
		let getNum = 0;
		let count = 0;

		for (let index = 2; index <= number; index++) {
			getNum = number % index
				if(getNum == 0){
				count++
				}
			if(count > 1)
				return true;
			return false;
}

}

let num = isPrimeNum(12);
console.log("Is the number a prime num? " +num);


module.exports =  {isPrimeNum};




