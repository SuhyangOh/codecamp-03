// 문자열 내림차순으로 배치하기
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
function solution(s) {
	var answer = "";
	// sort(정렬) 을 사용하기 위해 배열로 저장해주는 변수
	const arr = [];

	for (let i = 0; i < s.length; i++) {
		arr.push(s[i]);
	}
	return arr.sort().reverse().join("");

	// arr.sort( (a, b) => {
	//  배열을 내림차순으로 정렬하는 식
	//     return a > b ? -1 : 1
	// })
	// return arr.join("");
}

// K번째수
// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록
// solution 함수를 작성해주세요.

function solution(array, commands) {
	var answer = [];
	var arr = [];
	for (let i = 0; i < commands.length; i++) {
		arr = array.slice(commands[i][0] - 1, commands[i][1]);
		answer.push(
			arr.sort((a, b) => {
				return a - b;
			})[commands[i][2] - 1]
		);
	}
	return answer;
}
function solution(array, commands) {
	const answer = commands.map((el) => {
		const sliceResult = array.slice(el[0] - 1, el[1]).sort((a, b) => {
			return a - b;
		});
		return sliceResult[el[2] - 1];
	});
	return answer;
}
