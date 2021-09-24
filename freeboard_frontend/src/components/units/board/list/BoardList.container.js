import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardListPageUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";

export default function BoardListPage() {
    const[startPage, setStartPage] = useState(1);
    const { data, refetch } = useQuery(FETCH_BOARDS,{
        variables: {page: startPage}
    });

    const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

    const router = useRouter();

    function onClickNewPage() {
        router.push("/boards/new");
    }

    function onClickMoveToBoardDetail(event) {
        router.push(`/boards/${event.currentTarget.id}`);
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
        />
    );
}
