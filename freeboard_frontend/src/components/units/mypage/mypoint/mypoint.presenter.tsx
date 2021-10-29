import { Mydiv, MyMarket, SearchDiv } from "../mypage.styles";
import PointCharge from "./charge/charge.point.container";
import PurchasePoint from "./purchase/purchase.point.container";
import TotalPoint from "./total/total.point.container";

export default function MyPointUI(props) {
	return (
		<MyMarket>
			<SearchDiv>
				<Mydiv onClick={props.onClickTotal}>전체내역</Mydiv>|
				<Mydiv onClick={props.onClickCharge}>충전내역</Mydiv>|
				<Mydiv onClick={props.onClickPurchase}>구매내역</Mydiv>|
				<Mydiv onClick={props.onClickSold}>판매내역</Mydiv>
			</SearchDiv>
			{props.total && <TotalPoint />}
			{props.charge && <PointCharge />}
			{props.purchase && <PurchasePoint />}
			{/* {props.total && <TotalPoint />} */}
		</MyMarket>
	);
}
