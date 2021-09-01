import { useState } from 'react'
import {Red} from '../../../../styles/SignUp'

export default function SignUpPage() {

    const [ email, setEmail ] = useState("")
    const [ emailError, setEmailError] = useState("")

    const [ pass1, setPass1 ] = useState("")
    const [ pass2, setPass2 ] = useState("")
    const [ passError, setPassError ] = useState("")

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePass1(event) {
        setPass1(event.target.value)
    }

    function onChangePass2(event) {
        setPass2(event.target.value)
    }

    function onClickSignUp() {
        if (!email.includes("@")) {
            setEmailError("@가 없습니다.")
        } 
        if (pass1 !== pass2) {
            setPassError("비밀번호가 다릅니다.")
        }
    }

    return(
        <div>
            이메일 : <input type="text" onChange={onChangeEmail} /><br />
            <Red>{emailError}</Red>
            비밀번호 : <input type="password" onChange={onChangePass1} /><br />
            비밀번호 확인 : <input type="password" onChange={onChangePass2} /><br />
            <Red>{passError}</Red>
            <button onClick={onClickSignUp}>가입하기</button>
    
        </div>
    )
        
}