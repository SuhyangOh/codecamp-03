
export default function MarketNewPageUI(props) {
    return(
        <>
            판매자: <input type="text" onChange={props.onChangeSeller}/><br />
            상품명: <input type="text" onChange={props.onChangeName}/><br />
            상품상세: <input type="text" onChange={props.onChangeDetail}/><br />
            상품가격: <input type="text" onChange={props.onChangePrice}/><br />
            <button onClick={props.onClickSubmit}>상품 등록하기</button>
        </>
    )
}