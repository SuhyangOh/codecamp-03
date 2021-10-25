import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS_I_SOLD } from "../../mypage.queries";
import MyItemsUI from "./myitems.presenter";

export default function MyItems() {
	const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD);
	const router = useRouter();

	function onClickMoveToDetail(event) {
		router.push(`/markets/${event.currentTarget.id}/`);
	}

	return <MyItemsUI data={data} onClickMoveToDetail={onClickMoveToDetail} />;
}
