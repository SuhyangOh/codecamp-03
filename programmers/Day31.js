// 실패율

function solution(N, stages) {
	var answer = [];
	for (let i = 0; i < N + 1; i++) {
		answer[i] = [i, 0];
	}
	stages.sort();
	for (let i = 0; i < stages.length; i++) {
		answer[stages[i] - 1][1]++;
	}

	let total = stages.length;
	for (let i = 0; i < N; i++) {
		let ss = answer[i][1];
		answer[i][1] = ss / total;
		total -= ss;
	}
	answer.sort(function (a, b) {
		return -a[1] + b[1];
	});

	let ans = [];
	for (let i = 0; i < answer.length; i++) {
		if (answer[i][0] < N) {
			ans.push(answer[i][0] + 1);
		}
	}
	return ans;
}
