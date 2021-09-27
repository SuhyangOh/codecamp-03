import { BlackDiv, LoginDiv, Logo, WhiteDiv, Wrapper } from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
    return (
        <>
            <Wrapper onClick={props.onClickMoveToBoardList}>
                <Logo src="/images/starbucks.png"/>
                <div>STARBUCKS COFFEE</div>
                <LoginDiv>로그인 | 회원가입</LoginDiv>
            </Wrapper>
            <BlackDiv/>
            <WhiteDiv/>
            <BlackDiv/>
        </>
    )
}