import { useState } from "react";
import MyPointUI from "./mypoint.presenter";
export default function MyPoint() {
	const [total, setTotal] = useState(true);
	const [charge, setCharge] = useState(false);
	const [purchase, setPurchase] = useState(false);
	const [sold, setSold] = useState(false);

	function onClickTotal() {
		setTotal(true);
		setCharge(false);
		setPurchase(false);
		setSold(false);
	}
	function onClickCharge() {
		setTotal(false);
		setCharge(true);
		setPurchase(false);
		setSold(false);
	}
	function onClickPurchase() {
		setTotal(false);
		setCharge(false);
		setPurchase(true);
		setSold(false);
	}
	function onClickSold() {
		setTotal(false);
		setCharge(false);
		setPurchase(false);
		setSold(true);
	}

	return (
		<>
			<MyPointUI
				total={total}
				charge={charge}
				purchase={purchase}
				sold={sold}
				onClickCharge={onClickCharge}
				onClickPurchase={onClickPurchase}
				onClickSold={onClickSold}
				onClickTotal={onClickTotal}
			/>
		</>
	);
}
