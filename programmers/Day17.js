//행렬의 덧셈
function solution(arr1, arr2) {
	let finalarr = [];
	let arr = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr1[i].length; j++) {
			arr.push(arr1[i][j] + arr2[i][j]);
			if (j === arr1[i].length - 1) {
				finalarr.push(arr);
				arr = [];
			}
		}
	}

	return finalarr;
}

function solution(arr1, arr2) {
	const answer = arr1.map((num1, i) => {
		return num1.map((num2, j) => {
			return num2 + arr2[i][j];
		});
	});
	return answer;
}
