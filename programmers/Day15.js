// 하샤드 수
function solution(x) {
	let xx = x;
	let dsum = 0;
	while (xx > 0) {
		dsum += xx % 10;
		xx = Math.floor(xx / 10);
	}

	if (x % dsum === 0) {
		return true;
	}
	return false;
}

// for 문 풀이

function solution(x) {
	let answer = true;
	// 숫자를 문자열 형태로 변환
	x = x.toString();

	// 총 합을 담아주는 변수
	let sum = 0;
	for (let i = 0; i < x.length; i++) {
		// 다시 숫자타입으로 변환
		sum += Number(x[i]);
	}

	return x % sum === 0 ? true : false;
}

//forEach 풀이

function solution(x) {
	let sum = 0;
	x.toString()
		.split("")
		.forEach((num) => {
			sum += Number(num);
		});

	return x % sum === 0 ? true : false;
}

// reduce 사용

function solution(x) {
	let sum = x
		.toString()
		.split("")
		.reduce((el, cu) => {
			return Number(el) + Number(cu);
		});
	return x % sum === 0 ? true : false;
}
