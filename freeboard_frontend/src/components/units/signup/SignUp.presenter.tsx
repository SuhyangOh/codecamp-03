
import { Box, Error, LoginButton, Wrapper } from "./SignUp.styles";

export default function SignUpUI(props) {

    return (
        <Wrapper>
            <Error>{props.nameError}</Error>
            <Box type="text" onChange={props.onChangeName} placeholder="이름을 입력해주세요."/><br />
            <Error>{props.emailError}</Error>
            <Box type="text" onChange={props.onChangeEmail} placeholder="이메일을 입력해주세요."/><br />
            <Error>{props.passwordError}</Error>
			<Box type="password" onChange={props.onChangePassword} placeholder="비밀번호를 입력해주세요."/><br />
            <Error>{props.password2Error}</Error>
            <Box type="password" onChange={props.onChangePassword2} placeholder="비밀번호 확인"/><br />
            
			<LoginButton onClick={props.onClickSignUp}>회원가입</LoginButton>

        </Wrapper>
    )
}