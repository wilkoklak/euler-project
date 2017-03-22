function palindrome(num) {
	num = num.toString();
	if(num == num.split('').reverse().join('')) {
		return true;
	}
	return false;
}



function biggest() {
	let eq, max = 0, factors = [0, 0];
	for(let i = 1000; i >= 100; i--) {
		for(let j = 1000; j >= 100; j--) {
			eq = i*j;
			if(palindrome(eq)) {
				if(eq > max) {
					max = eq;
					factors = [i, j];
				}
			}
		}
	}
	return {max, factors};
}
console.log(biggest());
