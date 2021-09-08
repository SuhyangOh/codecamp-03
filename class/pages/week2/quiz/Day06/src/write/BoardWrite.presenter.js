import { MyButton } from "./Boardwrite.styles";

export default function QuizBoardWriteUI(props) {
    return (
        <>
            작성자 : <input type="text" onChange={props.onChangeMyWriter}/><br />
            제목 :<input type="text" onChange={props.onChangeMyTitle}/><br />
            내용 : <input type="text" onChange={props.onChangeMyContents}/><br />
            <MyButton onClick={props.aaa} qqq={props.qqq}>GRAPHQL-API 요청하기!!</MyButton>
        </>
    )
    
        
}