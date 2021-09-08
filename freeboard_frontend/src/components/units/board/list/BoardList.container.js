import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListPageUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardListPage() {
    const { data } = useQuery(FETCH_BOARDS)
    
    const router = useRouter();

    function onClickNewPage() {
        router.push('/boards/new')
    }

    return (
        <BoardListPageUI
            data={data}
            onClickNewPage={onClickNewPage}
        />
    )
}