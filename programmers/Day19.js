// 최대공약수와 최대공배수
function solution(n, m) {
	const narray = [];
	const marray = [];
	var answer = [];
	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			narray.push(i);
			narray.push(n / i);
		}
	}

	for (let i = 1; i < Math.sqrt(m); i++) {
		if (m % i === 0) {
			marray.push(i);
			marray.push(m / i);
		}
	}
	narray.sort((a, b) => {
		return b - a;
	});
	marray.sort((a, b) => {
		return b - a;
	});
	y: for (let i = 0; i < narray.length; i++) {
		for (let j = 0; j < marray.length; j++) {
			if (narray[i] === marray[j]) {
				answer.push(narray[i]);
				break y;
			}
		}
	}
	// if (answer[0] === 1) {
	//     answer.push(n * m);
	// } else if (narray.includes(m)) {
	//     answer.push(n);
	// } else if (marray.includes(n)) {
	//     answer.push(m);
	// } else {
	//     answer.push(answer[0] * (n / answer[0]) * (m / answer[0]))
	// }

	return answer.concat(answer[0] * (n / answer[0]) * (m / answer[0]));
}

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
	//최대공약수 :  두 수의 약수 중에서 제일 큰 수
	// 최소공배수 : 두 수의 배수 중에서 제일 작은 수
	let answer = [];
	//공통되는 약수를 담아주는 배열
	const gcdArr = [];
	// 최대공약수 구하기
	for (let i = 1; i <= m; i++) {
		if (n % i === 0 && m % i === 0) {
			gcdArr.push(i);
		}
	}
	answer[0] = Math.max(...gcdArr);
	//최소공배수 구하기
	for (let l = m; l <= n * m; l += m) {
		if (l % n === 0) {
			answer[1] = l;
			break;
		}
	}
	return answer;
}

//  유클리드 호제법

function solution(n, m) {
	// 유클리드 호제법
	// a 를 b 로 나눴을때 ( a 가 b 보다 클 경우) === 큰 수에서 작은 수를 나눴을 때
	// 나머지 값이 0 이 되면, 작은 수가 최소공배수가 된다.
	// 0이 되지 않으면 작은 수가 큰 수가되고, 나머지 값이 작은 수가 된다.
	// 반복했을대 0이 나오면, 작은 수가 최소공배수가 된다.

	let a = m; // 큰수
	let b = n; // 작은수
	let r = 0; // a 를 b 로 나눴을 때에 나머지 값을 저장

	while (a % b > 0) {
		r = a % b;
		a = b; // 큰 수에 작은 수를 할당
		b = r; // 작은 수에 나머지 값 할당
	}
	// 최소공배수는 두 수를 곱한 값에 최대 공약수를 나눈 값
	return [b, (n * m) / b];
}
