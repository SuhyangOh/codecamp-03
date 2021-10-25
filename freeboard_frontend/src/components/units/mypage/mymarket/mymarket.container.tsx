import { useState } from "react";
import MyItems from "./myitems/myitems.container";
import MyMarketUI from "./mymarket.presenter";
import MyPicks from "./mypicks/mypicks.container";

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
