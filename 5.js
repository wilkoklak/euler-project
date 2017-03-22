let odp = 1;

function gdc(a, b) {
	if(!b) {
		return a;
	}
	return gdc(b, a % b);
}

for(let i = 1; i < 21; i++) {
	odp *= Math.floor(i/gdc(i, odp))
}
console.log(odp)
