import { BlackDiv, LoginDiv, Logo, Wrapper } from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
    return (
        <>
            <Wrapper onClick={props.onClickMoveToBoardList}>
                <Logo src="/images/starbucks.png"/>
                <LoginDiv>
                    <div onClick={props.onClickSignIn}>Sign In&nbsp;&nbsp;&nbsp;&nbsp;|</div>
                    <div onClick={props.onClickMyStarbucks}>&nbsp;&nbsp;&nbsp;&nbsp;My Starbucks&nbsp;&nbsp;&nbsp;&nbsp;|</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;Customer Service&nbsp;&nbsp;&nbsp;&nbsp;|</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;Find a store&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </LoginDiv>
            </Wrapper>
            <BlackDiv/>
            {/* <WhiteDiv/>
            <BlackDiv/> */}
        </>
    )
}