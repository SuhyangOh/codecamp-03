import MyMarket from "./mymarket/mymarket.container";
import { MpDiv, MpName, MpTitle, MpWrapper, MyPage } from "./mypage.styles";

export default function MyPageUI(props) {
	return (
		<MyPage>
			<MpWrapper>
				<MpTitle>MYPAGE</MpTitle>
				<MpName>노원두</MpName>
				<MpDiv onClick={props.onClickMarket}>내 장터</MpDiv>
				<MpDiv onClick={props.onClickPoint}>내 포인트</MpDiv>
				<MpDiv onClick={props.onClickProfile}>내 프로필</MpDiv>
			</MpWrapper>
			{props.market && <MyMarket />}
		</MyPage>
	);
}
