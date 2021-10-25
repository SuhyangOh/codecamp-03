import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_I_PICKED } from "../../mypage.queries";
import MyPicksUI from "./mypicks.presenter";

export default function MyPicks() {
	const { data } = useQuery(FETCH_USEDITEM_I_PICKED, {
		variables: { search: "" },
	});

	const router = useRouter();

	function onClickMoveToDetail(event) {
		router.push(`/markets/${event.currentTarget.id}/`);
	}

	return <MyPicksUI data={data} onClickMoveToDetail={onClickMoveToDetail} />;
}
