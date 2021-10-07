// 문자열을 정수로 바꾸기
function solution(s) {
    
    return Number(s);
    // return s / 1;
    // return parseInt(s);

}


// 같은 숫자는 싫어
function solution(arr) {
    var answer = [];
    answer.push(arr[0]);
    var n = 0;
    for (var i = 1; i < arr.length; i++) {
        if (answer[n] !== arr[i]) {
            answer.push(arr[i]);
            n++;
        }
    }
    return answer;
}

// 핸드폰 번호 가리기

function solution(phone_number) {
    //return phone_number.replace(/\d(?=\d{4})/g, "*");
    if ( i < phone_number.length - 4) {
        answer = answer + '*';
    } else { 
        answer = answer + phone_number[i];
    }
 
 }