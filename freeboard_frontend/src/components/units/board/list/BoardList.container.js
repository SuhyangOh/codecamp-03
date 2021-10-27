import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardListPageUI from "./BoardList.presenter";
import {
	FETCH_BOARDS,
	FETCH_BOARDS_COUNT,
	FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";

export default function BoardListPage() {
	const [startPage, setStartPage] = useState(1);
	const { data, refetch } = useQuery(FETCH_BOARDS, {
		variables: { page: startPage },
	});
	const { data: best } = useQuery(FETCH_BOARDS_OF_THE_BEST);
	console.log(best);
	const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

	const router = useRouter();

	function onClickNewPage() {
		router.push("/boards/new");
	}

	function onClickMoveToBoardDetail(event) {
		router.push(`/boards/${event.currentTarget.id}`);
	}

	const [mySearch, setMySearch] = useState("");
	const [myKeyword, setMyKeyword] = useState("");

	function onChangeSearch(event) {
		setMySearch(event.target.value);
	}

	function onClickSearch(event) {
		refetch({
			search: mySearch,
		});
		setMyKeyword(mySearch);
	}

	return (
		<BoardListPageUI
			data={data}
			onClickNewPage={onClickNewPage}
			onClickMoveToBoardDetail={onClickMoveToBoardDetail}
			refetch={refetch}
			count={dataBoardsCount?.fetchBoardsCount}
			startPage={startPage}
			setStartPage={setStartPage}
			onChangeSearch={onChangeSearch}
			onClickSearch={onClickSearch}
			best={best}
		/>
	);
}
