import { MyButton , Title } from "./MarketNew.styles";

export default function MarketNewPageUI(props) {
    return(
        <>
            {!props.isEdit ?  <Title>등록페이지</Title> : <Title>수정페이지</Title>}   
            {!props.isEdit && <div>판매자: <input type="text" onChange={props.onChangeSeller}/><br /></div>}
            상품명: <input type="text" onChange={props.onChangeName}/><br />
            상품상세: <input type="text" onChange={props.onChangeDetail}/><br />
            상품가격: <input type="text" onChange={props.onChangePrice}/><br />
           
            {!props.isEdit &&  <MyButton onClick={props.onClickSubmit} >등록하기</MyButton>}
            {props.isEdit &&  <MyButton onClick={props.onClickEdit} >수정하기</MyButton>}
        </>
    )
}