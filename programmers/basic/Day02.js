//1. 변수와 상수
//001. 선언과 할당
const name1 = "영희"

//002. 재할당
let name2 = "영희"
name2 = "철수"

//2. 배열
//003. 배열의 선언과 할당
let fruits = []

fruits.push("사과")
fruits.push("바나나")
fruits.push("파인애플")

//Reference Code
// fruits = ["사과", "바나나", "파인애플"]

//004. 배열의 기능
let fruits = ["사과", "바나나", "파인애플"]
let newFruits = []

newFruits.push(fruits[fruits.length-1])

//005. 배열의 기능

let students = ["철수", "영희", "훈이", "짱구", "유리"]

let newStudents = students.slice(0, 3)

//006. 배열의 기능

let fruits = ["사과", "바나나"]

fruits.map((data) => ("맛있는" + data))

//Reference Code
fruits[0] = "맛있는 " + fruits[0]
fruits[1] = "맛있는 " + fruits[1]

//007. 문자열 배열
const number = "01012345678"

let phone = []
phone.push(number.slice(0,3))
phone.push(number.slice(3,7))
phone.push(number.slice(7,11))

//3. 객체
//008. 객체의 선언과 할당

let student = {};
student.name = "철수"

//009. 객체의 키 & 값 추가
const student = {
	name: "철수",
	age: 8,
};


const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school













