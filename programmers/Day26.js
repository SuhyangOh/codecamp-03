// 시저 암호
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
	const answer = s.split("").map((str) => {
		if (str === " ") {
			return " ";
		}
		const text = lower.includes(str) === true ? lower : upper;
		let index = text.indexOf(str) + n;
		if (text[index] === undefined) {
			index = index - 26;
		}
		return text[index];
	});
	return answer.join("");
}

// 2

function solution(s, n) {
	let result = "";

	for (let i = 0; i < s.length; i++) {
		if (s[i] === " ") {
			result += " ";
		} else {
			let charcode = s.charCodeAt(i) + n;

			if (charcode > 122 || (charcode > 90 && charcode - n < 97)) {
				// 소문자 z (122) 이상을 넘어가거나
				// 대문자 Z (90) 를 넘어가면서
				// 기존의 charcode 의 값이 소문자일 경우
				charcode = charcode - 26;
			}
			result += String.fromCharCode(charcode);
		}
	}

	return result;
}
