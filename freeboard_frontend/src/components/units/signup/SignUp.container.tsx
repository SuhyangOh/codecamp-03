import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SignUpUI from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";

export default function SignUp() {

    const [signUp] = useMutation(CREATE_USER)
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
    const [password2Error, setPassword2Error] = useState("");
    const [name, setName] = useState("");

    function onChangeEmail(event) {
		setEmail(event.target.value);
	}
	function onChangePassword(event) {
		setPassword(event.target.value);
	}
    function onChangePassword2(event) {
		setPassword2(event.target.value);
	}
    
    function onChangeName(event) {
        setName(event.target.value)
    }
    const router = useRouter();

    function checkEmptySpace() {
		if(name === ""){
			setNameError("이름을 입력해주세요.")
		}
		if(email === ""){
			setEmailError("이메일을 입력해주세요.")
		}
		if(password === ""){
			setPasswordError("비밀번호를 입력해주세요.")
		}
		if(password2 === ""){
			setPassword2Error("비밀번호를 입력해주세요.")
		}
	}

    async function onClickSignUp() {
        checkEmptySpace()
        if(password !== password2) {
            alert("비밀번호가 다릅니다.")
            return;
        }
        try {await signUp({
            variables: {
                createUserInput : {
                    email, password, name
                }
            }
        })
        alert(`회원가입에 성공했습니다.`)
        router.push("/login")
    }
        catch(error) {
            alert(error)
        }
    }

    return (
        <SignUpUI 
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onClickSignUp={onClickSignUp}
            onChangeName={onChangeName}
            onChangePassword2={onChangePassword2}
            nameError={nameError}
            emailError={emailError}
            passwordError={passwordError}
            password2Error={password2Error}
        />)
}