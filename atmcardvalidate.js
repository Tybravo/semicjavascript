let cardnumber = "5244-5678-9012-3456";

	function validate (number){
		let newNum = ""
		for(let index = 0; index < number.length; index++ ){
			if(number[index] != "-"){
				newNum += number[index];
			}
		}

			/*
			if(newNum.length == 16 & newNum.startsWith("4") ||newNum.startsWith("5") || newNum.startsWith("6")) {
				return true;
			}
			*/

			if(newNum.length == 16 && newNum.startsWith("4") && /^\d+$/.test(newNum)) {
				return "This is a VisaCard"
			}
			if(newNum.length == 16 && newNum.startsWith("5") && /^\d+$/.test(newNum)) {
				return "This is a MasterCard"
			}
			if(newNum.length == 16 && newNum.startsWith("3") && /^\d+$/.test(newNum)) {
				return "This is an AmericaExpress"
			}


			return false
	}

console.log(validate(cardnumber));
		