import BoardCommentsList from "../../../src/components/units/board/comments/list/CommentsList.container";
import BoardCommentsWrite from "../../../src/components/units/board/comments/write/CommentsWrite.container";
import BoardReadPage from "../../../src/components/units/board/read/BoardRead.container";

import styled from "@emotion/styled/";
const Wrapper = styled.div`
    margin: 100px;
    width: 1200px;
`
export default function BoardsDetailPage() {
    return (
        <Wrapper>
            <BoardReadPage />
            <BoardCommentsWrite isEdit={false}/>
            <BoardCommentsList />
        </Wrapper>
    );
}
