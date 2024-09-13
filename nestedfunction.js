function outerFunction(numOne, numTwo){
		console.log("outer function");
		function innerFunction(){
			return numOne * numTwo;
		}
		return innerFunction();
}
console.log(outerFunction(2, 3));
