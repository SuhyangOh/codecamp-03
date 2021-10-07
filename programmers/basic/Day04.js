//023. 숫자 더하기
function sum(num) {
    let count = 0;
    for (let i = 1; i <= num; i + i++) {
        count = count + i;
    }
    console.log(count);
}

//024. 특정 문자열 세기
function countLetter(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a") {
            count++;
        }
    }
    console.log(count);
}

//025. 문자열 상빕
function makeNumber(num) {
    let str ="1";
    for (let i = 2; i <= num; i++) {
        str = str + "-" + i;
    }
    console.log(str);
}

//026. 홀수 문자열
function makeOdd(num) {
    let str = "";
    for (let i = 1; i <= num; i += 2) {
        str = str + i
    }
    console.log(str);
}

//027, 가장 큰 수 찾기
funtcion bigNum(str) {
    let max = 0;
    for (let i = 0; i < str.length; i ++) {
        if (max < Number(str[i])) {
            max = Number(str[i]);
        }
    }
    console.log(max);
};