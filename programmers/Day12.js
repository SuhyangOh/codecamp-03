function solution(n) {
	let sqrt = Math.sqrt(n);
	if (Number.isInteger(sqrt)) {
		sqrt++;
		return sqrt * sqrt;
	} else {
		return -1;
	}
}
