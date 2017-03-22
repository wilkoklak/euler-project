function isPrime(num) {
	for(let i = 2; i <= Math.sqrt(num); i++) {
		if(num % i == 0) {
			return false;
		}
	}
	return true;
}

let count = 1, i = 2;
while(count < 10002) {
	if(isPrime(i)) {
		count++;
	}
	i++;
}
console.log(i - 1);
