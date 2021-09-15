import BoardCommentListUIItem from "./CommentsList.presenterItem";

export default function BoardCommentsListUI(props) {
    return (
        <>
        {props.data?.fetchBoardComments.map((el) => (
            <BoardCommentListUIItem key={el._id} el={el} />
        ))}
        </>
    )
}