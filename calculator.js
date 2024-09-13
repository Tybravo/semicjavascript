/*
function Calculator (number1, number2, operator) {

	if(operator =="*"){
		const answer = number1 * number2;
		}
	if(operator =="/"){
		const answer =number1 / number2;
		}
	if(operator =="-"){
		const answer= number1 - number2;
		}
	if(operator =="+"){
		const answer= number1 * number2;
		}
	return answer;
//let calculator =  Calculator(answer)

}
	console.log(Calculator(10, '*', 5));
*/



function Calculator (number1, operator, number2) {
	return operator === '*' ? number1 * number2 :
			operator  === '+' ? number1 + number2 :
			operator  === '-' ? number1 - number2 :
			operator  === '/' ? number1 / number2 :nah;
}

console.log(Calculator(10, '*', 5));
console.log(Calculator(10, '+', 5));
console.log(Calculator(10, '-', 5));
console.log(Calculator(10, '/', 5));


