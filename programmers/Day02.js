// 짝수와 홀수
function solution(num) {
    return num % 2 ? "Odd" : "Even";
}

// 평균 구하기
function solution(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer / arr.length;
}

//가운데 글자 가져오기
function solution(s) {
    let m = s.length / 2 ;
    if (s.length % 2 === 1) {
        m -= 0.5;
        return s[m];
    } else {
        return s[m - 1] + s[m];
    }
}

// mentor 풀이
function solution2(s) {
    const half = Math.floor(s.length / 2);
    return s.length % 2 === 0
        ? s[half - 1] + s[half]
        : s[half]
}
