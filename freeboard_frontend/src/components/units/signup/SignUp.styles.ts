import styled from "@emotion/styled"

export const Wrapper = styled.div`
    margin:100px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between
`
export const Box = styled.input`
    width: 384px;
    height: 64px;
    padding: 20px;
    font: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    opacity: 0.6;
    box-sizing: border-box;
    border-radius: 16px;
`

export const LoginButton = styled.button`
    width: 384px;
    height: 64px;
    margin-bottom: 20px;
    padding: 20px;
    font: Noto Sans CJK KR;
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    opacity: 0.6;
    box-sizing: border-box;
    border-radius: 16px;
    background: #4F4F4F;
`

export const Error = styled.div`
  font-size: 14px;
  color: red;
`;