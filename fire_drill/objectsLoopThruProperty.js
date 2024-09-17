	const car = {
		make: "Toyota",
		model: "Camry",
		year: 2021
	}


	function print(car) {
	
	for(let key in car){
		console.log(key, car[key]);
		return car;
	}
}

console.log(print(car));
