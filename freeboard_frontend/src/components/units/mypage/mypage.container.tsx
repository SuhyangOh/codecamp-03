import { useState } from "react";
import MyPageUI from "./mypage.presenter";

export default function MyPage() {
	const [market, setMarket] = useState(true);
	const [point, setPoint] = useState(false);
	const [profile, setProfile] = useState(false);
	function onClickMarket() {
		setMarket(true);
		setPoint(false);
		setProfile(false);
	}
	function onClickPoint() {
		setMarket(false);
		setPoint(true);
		setProfile(false);
	}
	function onClickProfile() {
		setMarket(false);
		setPoint(false);
		setProfile(true);
	}
	return (
		<MyPageUI
			point={point}
			profile={profile}
			market={market}
			onClickMarket={onClickMarket}
			onClickPoint={onClickPoint}
			onClickProfile={onClickProfile}
		/>
	);
}
