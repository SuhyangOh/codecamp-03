//41. 조건문 실전 적용 - 점수에 따른 등급
function grade(score) {
    if (score > 100 || score < 0) {
        let result = "잘못된 점수입니다.";
    } else if (score >= 90) {
        result = "A"
    } else if (score >= 80) {
        result = "B"
    } else if (score >= 70) {
        result = "C"
    } else if (score >= 60) {
        result = "D"
    } else {
        result = "E"
    }
	console.log(result)
}


//43. 마이페이지

const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]

// 구매한 횟수를 담아주는 변수
let count = 0;

// 구매한 총 금액을 담아주는 변수
let price = 0;

// 구매한 횟수에 따라 결정되는 등급을 담아주는 변수
let grade = "";

for(let i = 0; i < myShopping.length; i = i + 1) {
    if(myShopping[i].category === "의류") {
        count = count + 1;
        price = price + myShopping[i].price;

        if(count >= 0 && count <= 2) {
            grade = "Bronze";
        } else if(count >= 3 && count <= 4) {
            grade = "Sliver";
        } else if(count >= 5) {
            grade = "Gold";
        }
    }
}
console.log("의류를 구매한 횟수는 총 " + count + "회 금액은" + price + "원이며 등급은" + grade + "입니다.")