let array = [2,4,6,8]

function revArray(array) {
		
		let arrayFirst = 0;
		let arrayLast = array.length - 1;

	while (arrayFirst < arrayLast){
	let temp = array[arrayFirst];
	array[arrayFirst] = array[arrayLast];
	array[arrayLast] = temp;

	arrayFirst++
	arrayLast--
	}
	return array;

			
	}

	module.exports =  {revArray};


