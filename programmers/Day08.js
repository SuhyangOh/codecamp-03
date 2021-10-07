// 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
// 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
//  단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

function solution(s) {
	s = s.toLowerCase();
	let p = 0;
	let y = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "p") {
			p += 1;
		} else if (s[i] === "y") {
			y += 1;
		}
	}

	return p === y;
}

// 이상한 문자 만들기
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수,
// solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

function solution(s) {
	let arr = [];
	let b = true;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === " ") {
			arr.push(s[i]);
			b = true;
		} else {
			if (b) {
				arr.push(s[i].toUpperCase());
				b = !b;
			} else {
				arr.push(s[i].toLowerCase());
				b = !b;
			}
		}
	}
	return arr.join("");
}
