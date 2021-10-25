import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MyItems from "../../src/components/units/mypage/mymarket/myitems/myitems.container";
import MyMarket from "../../src/components/units/mypage/mymarket/mymarket.container";
import MyPicks from "../../src/components/units/mypage/mymarket/mypicks/mypicks.container";
import MyPage from "../../src/components/units/mypage/mypage.container";

const myStarbucks = () => {
	// accessToken이 있는가?
	// accessToken이 없다면, login 페이지로 보내기
	return (
		<div>
			<MyPage />
			{/* <MyMarket /> */}
			{/* <MyPicks />
			<MyItems /> */}
		</div>
	);
};

export default withAuth(myStarbucks);
