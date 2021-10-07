// 완주하지 못한 선수
function solution(participant, completion) {
	let answer = "";
	participant.sort((a, b) => (a < b ? -1 : 1));
	completion.sort((a, b) => (a < b ? -1 : 1));

	for (let i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) {
			answer = participant[i];
			return answer;
		}
	}
}
