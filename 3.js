let n = Math.ceil(600851475143);

function isPrime(num) {
	for(let i = 2; i < Math.sqrt(num) + 1; i++) {
		if(num % i == 0) {
			return false;
		}
	}
	return true;
}

for(let i = Math.ceil(Math.sqrt(n)); i >= 2; i--) {
	if(600851475143 % i == 0) {
		if(isPrime(i)) {
			console.log(i);
			break;
		}
	}
}
