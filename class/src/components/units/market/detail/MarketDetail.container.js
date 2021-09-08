import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketNewPageUI from "../new/MarketNew.presenter";
import { FETCH_PRODUCTS } from "./MarketDetail.queries";

export default function MarketDetailPage() {

    const router = useRouter();
    const { data } = useQuery(FETCH_PRODUCTS, {
        variables : { productId: router.query._id}
    });
    return (
        <MarketNewPageUI 
            router={router}
            data={data}
        />
    )
}