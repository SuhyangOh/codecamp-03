// 6. 조건문
// 018. 조건문 연습
function boolean(input1, input2) {
	if (input1 === false && input2 === false) {
		console.log( false)
	} else {
		console.log(true)
	}
}

//019. 홀짝
function evenOdd(num){
	if (num % 2 === 0) {
		console.log("Even");
	} else if (num % 2 === 1) {
		console.log("Odd");
	} else if (num === 0) {
		console.log("Zero");
	}
}

//020. 온도
function temperature(num){
	if (num <= 18) {
		console.log("조금 춥네요");
	} else if (num <= 23) {
		console.log("날씨가 좋네요");
	} else {
		console.log("조금 덥ㅅㅂ니다");
	}
}

//021. 며칠
function days(month){
	if (month == 2) {
		console.log("28일");
	} else if (month < 8) {
        if (month % 2 === 1) {
            console.log("31일")
        } else {
            console.log("30일")
        }
    } else {
        if (month % 2 === 1) {
            console.log("30일")
        } else {
            console.log("31일")
        }
    }
}

