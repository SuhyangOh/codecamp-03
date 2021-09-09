
export default function MarketDetailPageUI(props) {
    return (
        <div>
            판매자:{props.data? props.data.fetchProduct.seller : "loading..."}<br />
            상품명:{props.data? props.data.fetchProduct.name : "loading..."}<br />
            상품상세:{props.data? props.data.fetchProduct.detail : "loading..."}<br />
            상품가격:{props.data? props.data.fetchProduct.price : "loading..."}<br />
            <button onClick={props.onClickMoveToEdit}>수정하기</button>
        </div>
    )
}