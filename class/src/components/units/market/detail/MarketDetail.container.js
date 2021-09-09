import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailPageUI from "./MarketDetail.presenter";
import { FETCH_PRODUCT } from "./MarketDetail.queries";

export default function MarketDetailPage() {

    const router = useRouter();
    const { data } = useQuery(FETCH_PRODUCT, {
        variables : { productId: router.query.productId}
    });
    function onClickMoveToEdit() {
        router.push(`/week2/quiz/Day08/market/${router.query.productId}/update`)
    }

    return (
        <MarketDetailPageUI 
            router={router}
            data={data}
            onClickMoveToEdit={onClickMoveToEdit}
        />
    )
}