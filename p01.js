var sumMultiples = 0;
for(var i = 1; i < 1000; i++) {
	if(i % 3 === 0 || i % 5 === 0) {
		sumMultiples += i;
	}
}
console.log("Sum of the multiples is: " + sumMultiples);