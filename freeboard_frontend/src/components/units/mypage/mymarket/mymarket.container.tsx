import { useState } from "react";
import MyMarketUI from "./mymarket.presenter";

export default function MyMarket() {
	const [items, setItems] = useState(true);
	function onClickItems() {
		setItems(true);
	}
	function onClickPick() {
		setItems(false);
	}
	return (
		<MyMarketUI
			items={items}
			onClickItems={onClickItems}
			onClickPick={onClickPick}
		/>
	);
}
