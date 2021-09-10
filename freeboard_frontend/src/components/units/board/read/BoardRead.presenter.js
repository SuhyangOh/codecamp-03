import { Button, Avatar, BottomDiv, Box, Date, MiddleDiv,
     Name, NameDateDiv, TitleDiv, UpperDiv, Wrapper, CommentDiv, Comments, NewComment, CommentTitle, CommentIcon, NewCommentInput, NewCommentTop, NewCommentInput2, CommentTitleDiv } 
     from "./BoardRead.styles";


export default function BoardReadPageUI(props) {
    return(
        <Wrapper>
            <Box>
                <UpperDiv>
                    <Avatar src="/images/avatar.png" />
                    <NameDateDiv>
                        <Name>{props.data? props.data.fetchBoard.writer : "loading..."}</Name>
                        <Date>{props.data? props.data.fetchBoard.createdAt : "loading..."}</Date>
                    </NameDateDiv>
                </UpperDiv>
                <TitleDiv>{props.data ? props.data.fetchBoard.title : "loading..."}</TitleDiv>
                <MiddleDiv>
                    {props.data ? props.data.fetchBoard.contents : "loading..."}
                </MiddleDiv>
            </Box>
            <BottomDiv>
                <Button onClick={props.onClickMoveToBoardsList}>목록으로</Button>
                <Button onClick={props.onClickMoveToEdit}>수정하기</Button>
                <Button onClick={props.onClickDeleteBoard}>삭제하기</Button>
            </BottomDiv>
            <CommentDiv>
                <CommentTitleDiv>
                    <CommentIcon src="/images/Comment.png" />
                    <CommentTitle>댓글</CommentTitle>
                </CommentTitleDiv>
                <NewComment>
                        <NewCommentTop>
                            <NewCommentInput name="commentwriter" type="text" placeholder="작성자" />
                            <NewCommentInput name="commentpassword" type="text" placeholder="비밀번호" />
                        </NewCommentTop>
                    <NewCommentInput2 name="commentcontents" placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
                </NewComment>
                <Comments></Comments>
            </CommentDiv>
        </Wrapper>
    )
}