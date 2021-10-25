import { useRouter } from "next/router";
import MarketListPage from "../../src/components/units/markets/list/MarketList.container";

export default function MarketPage() {
	const router = useRouter();
	function onClickMoveToNew() {
		router.push("/markets/new");
	}
	return (
		<div>
			<MarketListPage />
			<button onClick={onClickMoveToNew}>상품 등록하기</button>
		</div>
	);
}
