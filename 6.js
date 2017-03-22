let s = 0, s2 = 0;

for(let i = 1; i <= 100; i++) {
	s += i;
	s2 += i**2;
}
console.log(s**2 - s2);
