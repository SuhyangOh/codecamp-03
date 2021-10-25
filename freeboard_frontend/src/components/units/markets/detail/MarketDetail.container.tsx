import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import MarketDetailPageUI from "./MarketDetail.presenter";
import {
	CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
	FETCH_USED_ITEM,
} from "./MarketDetail.queries";
export default function MarketDetailPage() {
	const router = useRouter();
	const { data } = useQuery(FETCH_USED_ITEM, {
		variables: {
			useditemId: router.query.marketId,
		},
	});
	function onClickList() {
		router.push(`/markets/`);
	}

	const [createPointTransactionOfBuyingAndSelling] = useMutation(
		CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
	);
	async function onClickPurchase() {
		try {
			const result = await createPointTransactionOfBuyingAndSelling({
				variables: {
					useritemId: router.query.marketId,
				},
			});
			console.log(result);
			alert("완료!");
		} catch (error) {
			alert(error);
		}
	}

	return (
		<MarketDetailPageUI
			data={data}
			onClickList={onClickList}
			onClickPurchase={onClickPurchase}
		/>
	);
}
