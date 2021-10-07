// 내적
function solution(a, b) {
	let answer = 0;
	for (let i = 0; i < a.length; i++) {
		answer += a[i] * b[i];
	}
	return answer;
}

// 제일 작은 수 제거하기
function solution(arr) {
	if (arr.length == 1) {
		return [-1];
	} else {
		let value = arr[0];
		let index = 0;
		for (let i = 1; i < arr.length; i++) {
			if (value > arr[i]) {
				value = arr[i];
				index = i;
			}
		}
		arr.splice(index, 1);
		return arr;
	}
}
