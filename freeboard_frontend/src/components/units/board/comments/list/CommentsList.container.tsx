import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../Comments.queries";
import BoardCommentsListUI from "./CommentsList.presenter";

export default function BoardCommentsList() {
    const router = useRouter();
    const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

    function onLoadMore() {
        if (!data) return;

        fetchMore({
            variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1},
            updateQuery: (prev, {fetchMoreResult}) => {
                return {
                     fetchBoardComments: [
                    ...prev.fetchBoardComments,
                    ...fetchMoreResult.fetchBoardComments,
                ],
                }
            }
        })
    }

    return <BoardCommentsListUI data={data} onLoadMore={onLoadMore} />;
}