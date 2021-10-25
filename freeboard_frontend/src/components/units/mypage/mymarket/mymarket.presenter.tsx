import { Mydiv, MyMarket, SearchDiv } from "../mypage.styles";
import MyItems from "./myitems/myitems.container";
import MyPicks from "./mypicks/mypicks.container";

export default function MyMarketUI(props) {
	return (
		<MyMarket>
			<SearchDiv>
				<Mydiv onClick={props.onClickItems}>나의상품</Mydiv>|
				<Mydiv onClick={props.onClickPick}>마이찜</Mydiv>
			</SearchDiv>
			{props.items ? <MyItems /> : <MyPicks />}
		</MyMarket>
	);
}
