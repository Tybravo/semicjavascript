const counter =  {
	count: 0,
	step: 5,
	increment: function () {
		this.count += this.step;
		return this.count;

	}
};

console.log(counter.increment());

