let fib = [1, 2];
let sum = 0;

let i = 2;
fib[i] = fib[i - 1] + fib[i - 2];
while(fib[i] <= 4000000) {
	if(fib[i] % 2 == 0) {
		sum += fib[i]
	}
	i++;
	fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(sum);
