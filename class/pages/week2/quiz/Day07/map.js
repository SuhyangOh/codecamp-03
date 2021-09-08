const classmates = [
    { name: "철수", age: 13 },
    { name: "영희", age: 10 },
    { name: "훈이", age: 11 },
]

classmates.map((el) => ({name: el.name, age: el.age, school: "토끼초등학교"}))

classmates.map((el) => ({name: el.name + "어린이"}))
["철수어린이","영희어린이","훈이어린이"]

classmates.map((el) => ({name: el.name + "어린이", age: el.age, school: el.school}))

classmates.filter((el) => (el.school === "토끼초등학교"))
classmates.filter((el) => (el.age === 11))
classmates.filter((el) => (el.name === "영희"))



// const classmates = [{name: "철수"},{name: "영희"},{name: "훈이"}]

// classmates.map((el) => ({name : `${el.name}`})) // name 자리에 어린이

// const classmates = [{name: "철수어린이"},{name: "영희어린이"}]

// classmate.map