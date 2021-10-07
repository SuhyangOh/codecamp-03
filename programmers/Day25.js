// 피보나치 수

function fib(n) {
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
}

function solution(n) {
	let fibn = fib(n);
	return fibn % 1234567;
}

function solution(n) {
	// 피보나치 수열들을 저장하는 배열
	const arr = [0, 1];

	for (let i = 2; i <= n; i++) {
		arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
	}
	return arr[n];
}
