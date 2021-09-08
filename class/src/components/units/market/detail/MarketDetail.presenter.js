import { useRouter } from "next/router"

export default function MarketDetailPageUI(props) {
    return (
        <div>
            판매자:{props.data?.fetchProduct.seller}<br />
            상품명:{props.data?.fetchProduct.name}<br />
            상품상세:{props.data?.fetchProduct.detail}<br />
            상품가격:{props.data?.fetchProduct.price}<br />
        </div>
    )
}