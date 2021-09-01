import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 640px;
    height: 1138px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: 0 50px;
    background-image: url('/images/pizza.png');
    color : white;
    font : SpoqaHanSans-Bold;
    font-size: 60px;
    

`;

export const StatusBar = styled.div`
    height: 43px;
`;

export const TitleSpace = styled.div`
    height: 532px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const InputDiv = styled.input`
    height: 50px;
    border: none;
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
    background: none;
    color: white;
    font: SpoqaHanSans-Regular;
    font-size: 24px;



`
export const LoginButton = styled.button`
    height: 76px;
    padding: 25px 0;
    opacity: 0.6;
    border-radius: 38px;
    background-color: #ff1b6d;
    color: white;
    font: SpoqaHanSans-Bold;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: none;
`

export const BottomSpace = styled.div`
    height : 125px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 70px;
`

export const OptionDiv = styled.div`
    color: white;
    font : SpoqaHanSans-Regular;
    font-size: 20px;
    
`

export const KakaoButton = styled.button`
    height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    border-radius: 38px;
    border: solid 2px #fae100;
    font: SpoqaHanSans;
    font-size: 26px;
    font-weight: bold;
    
`

export const Red = styled.div`
    color : red;
    font: SpoqaHanSans;
    font-size: 18px;
    height: 50px;
    padding-top: 10px;
`

