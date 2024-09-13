function multiplyByTwo(number){
		let multiplieir = 2;
		return number * multiplieir;
};

function calculate(num, callBack){
		return  callBack(num)
}

console.log(calculate(3, multiplyByTwo));

