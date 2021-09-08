export default function ExampleUI(props) {
    return(
        <>
            {/* <div>00페이지</div> */}
            <div>{props.isEdit ? "수정" : "등록"}페이지</div>
            제목 : <input type="text"/><br />
            내용 : <input type="text"/><br />
            <button>{props.isEdit ? "수정" : "등록"}하기</button>
        </>
    )
}