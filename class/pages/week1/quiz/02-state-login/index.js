import {Red, BottomSpace, InputDiv, KakaoButton, LoginButton, OptionDiv, StatusBar, TitleSpace, Wrapper} from '../../../styles/StateLogin'
import { useState } from 'react'

export default function Quiz01FAQPage() {

    const [email, setEmail] = useState("")
    const [ emailError, setEmailError] = useState("")

    const [ password, setPassword ] = useState("")
    const [ passError, setPassError ] = useState("")

    function onChangeEmail(event) {
        setEmail(event.target.value)
        if (event.target.value.includes("@")) {
            setEmailError("")
        }
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
        if (passError.length > 0 && password.length >= 8) {
            setPassError("")
        }
    }

    function onClickSignUp() {
        if (!email.includes("@")) {
            setEmailError("이메일 주소를 다시 확인해주세요.")
        } 
        if (password.length < 9) {
            setPassError("8-16자의 영문, 숫자, 특수문자만 사용 가능합니다.")
        }
    }
    

    return(
       <Wrapper>
           <StatusBar></StatusBar>
           <TitleSpace>
           <img src="/images/logo.png" />
            잇츠로드
           </TitleSpace>
           <InputDiv onChange={onChangeEmail}></InputDiv>
           <Red>{emailError}</Red>
           <InputDiv onChange={onChangePassword}></InputDiv>
           <Red>{passError}</Red>
           <LoginButton onClick={onClickSignUp}>로그인</LoginButton>
           <BottomSpace>
               <OptionDiv>이메일 찾기</OptionDiv>
               <OptionDiv>비밀번호 찾기</OptionDiv>
               <OptionDiv>회원가입</OptionDiv>
           </BottomSpace>
           <KakaoButton>카카오톡으로 로그인</KakaoButton>
       </Wrapper>
    )
}