import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import MarketListPageUI from "./MarketList.presenter";
import {
	FETCH_USED_ITEMS,
	FETCH_USED_ITEMS_OF_THE_BEST,
} from "./MarketList.queries";

export default function MarketListPage() {
	const { data, refetch } = useQuery(
		FETCH_USED_ITEMS
		//     , {
		//     variables: {}
		// }
	);

	const router = useRouter();
	const [basketItems, setBasketItmes] = useState([]);

	const { data: best } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("baskets")) || [];
		setBasketItmes(items);
	}, []);

	const onClickMoveToDetail = (el) => (event) => {
		router.push(`/markets/${event.currentTarget.id}/`);
		const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
		let isExits = false;
		baskets.forEach((basketEl) => {
			if (el._id === basketEl._id) isExits = true;
		});
		if (isExits) {
			return;
		}

		const newEl = { ...el };
		delete newEl.__typename;
		baskets.push(newEl);

		if (baskets.length > 3) {
			baskets.shift();
		}

		localStorage.setItem("baskets", JSON.stringify(baskets));
	};

	return (
		<MarketListPageUI
			data={data}
			onClickMoveToDetail={onClickMoveToDetail}
			basketItems={basketItems}
			best={best}
		/>
	);
}
