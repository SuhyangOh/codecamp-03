import CommentsPage from "../../../src/components/units/board/comments/Comments.container";
import BoardReadPage from "../../../src/components/units/board/read/BoardRead.container";

export default function BoardsDetailPage() {
    return (
        <>
            <BoardReadPage />
            <CommentsPage />
        </>
    );
}
