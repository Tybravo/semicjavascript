function calculate(){
		return{
				add:function(a,b){
						return a + b;
				},
				subtract : (a, b) => {
						return a - b;
				}
		};
};
let result = calculate();
console.log(result.add(1, 3));
console.log(result.subtract(7, 2));