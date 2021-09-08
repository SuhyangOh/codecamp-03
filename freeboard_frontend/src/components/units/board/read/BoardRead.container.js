import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import BoardReadPageUI from "./BoardRead.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardRead.queries";

export default function BoardReadPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables : { boardId: router.query.boardId}
    });

    const [deleteBoard] = useMutation(DELETE_BOARD); 

    async function onClickDeleteBoard() {
        await deleteBoard({
            variables : {boardId:router.query.boardId}
        })
        alert('게시물을 삭제합니다~')
        router.push(`/boards/list`)

    }

    function onClickMoveToBoardsList() {
        router.push('/boards/list')
    }
    

    return (
        <BoardReadPageUI
            router={router}
            data={data}
            onClickDeleteBoard={onClickDeleteBoard}
            onClickMoveToBoardsList={onClickMoveToBoardsList}
        />
    )

}