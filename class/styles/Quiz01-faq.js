import styled from '@emotion/styled'

export const Wrapper = styled.div`
    background-color: skyblue;
    width: 640px;
    height: 1138px;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 50px;
    position: fixed;
    top: 100px;
    left: 100px;
    right: 0;
`
export const ItemWrapper = styled.div`
    position: fixed;
    top: 475px;
    left: 120px;
    width: 640px;
    height: 694px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    `

export const Statusbar = styled.div`
    position: fixed;
    top: 100px;
    left: 100px;
    right: 0;
    width: 640px;
    height: 43px;
    margin: 0 0 36px;
    padding: 5px 13px 7px 445px;
    background-color: rgba(0, 0, 0, 0.1);
}
`
export const Itemdiv = styled.span`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Numberdiv = styled.span`
    width: 490px;
    height: 20px;
    margin: 0 0 14px;
    font-family: SpoqaHanSans;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    color: #adadad; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Questiondiv = styled.span`
    width: 490px;
    height: 26px;
    margin: 14px 0 0;
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: normal;
    color: #444;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Line = styled.div`
    position: fixed;
    top: 446px;
    left: 100px;
    right: 0;
    width: 640px;
    height: 1px;
    margin: 50px 0 29px;
    border: solid 1px #cacaca;
`