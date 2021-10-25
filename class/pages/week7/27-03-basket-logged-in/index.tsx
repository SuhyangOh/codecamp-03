import { useEffect, useState } from "react";

export default function BasketLoggedInPage() {
	const [basketItems, setBasketItems] = useState([]);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("baskets")) || [];
		setBasketItems(items);
	}, []);
	return (
		<div>
			<div>비회원으로 담은 장바구니</div>
			{basketItems.map((el, index) => (
				<div key={el}>
					<span style={{ marginRight: "10px" }}>{index}</span>
					<span style={{ marginRight: "10px" }}>{el.writer}</span>
					<span style={{ marginRight: "10px" }}>{el.title}</span>
				</div>
			))}
		</div>
	);
}
