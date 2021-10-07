// 서울에서 김서방 찾기
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

function solution(seoul) {
    let location = 0;
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            location = i;
            break;
        }
    }
    return "김서방은 " + location + "에 있다";
}

function findKim(seoul){
    var idx = seoul.indexOf('Kim');
    return "김서방은 " + idx + "에 있다";
  }

// 문자열 다루기 기본
// 문자열 s의 길이가 4 혹은 6이고, 
// 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.

function solution(s) {
    if (s.length === 4 || s.length === 6) {
        for (let i = 0; i < s.length; i++) {
            if (isNaN(Number(s[i]))) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function solution(s) {
    if (s.length !== 4 || s.length !== 6) {
        return false;
    }
    // 문자열을 배열로 만둘어준다.
    const answer = s.split("").filter(str => isNaN(str) === true)
    if (s.length > 0) {
        return false;
    }
    return true;
}

// 약수의 합
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

function solution(n) {
    let yaksu = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            yaksu.push(i);
        }
    }
    let answer = 0;
    for (let i = 0; i < yaksu.length; i++) {
        answer += yaksu[i];
    }
    return answer;
}

function solution2(n) {
    let solution = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            solution += i;
        }
    }
    return solution;
}


