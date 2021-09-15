import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { FETCH_BOARD_COMMENTS } from "../Comments.queries";
import BoardCommentsListUI from "./CommentsList.presenter";

export default function BoardCommentsList() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: { boardId: router.query.boardId },
    });

    return <BoardCommentsListUI data={data} />;
}