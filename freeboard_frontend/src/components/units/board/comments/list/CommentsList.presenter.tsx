import BoardCommentListUIItem from "./CommentsList.presenterItem";
import InfiniteScroll from "react-infinite-scroller"

export default function BoardCommentsListUI(props) {
    if (!props.data?.fetchBoardComments.length) return <></>
    return (
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
            <BoardCommentListUIItem key={el._id} el={el} />
        ))}
        </InfiniteScroll>
    )
}