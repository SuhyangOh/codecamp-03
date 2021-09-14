import {
  CommentDiv,
  Comments,
  NewComment,
  CommentTitle,
  CommentIcon,
  NewCommentInput,
  NewCommentTop,
  NewCommentInput2,
  CommentTitleDiv,
  CommentSubmit,
  CommentSubmitButton,
  CommentTop,
  CommentName,
  CommentStar,
  CommentContentsDiv,
  CommentDate,
  Avatar2,
  CommentDetail,
  OptionWrapper,
  UpdateIcon,
  DeleteIcon,
  MainWrapper,
} from "./Comments.styles";

export default function CommentsPageUI(props) {
  return (
    <CommentDiv>
        <CommentTitleDiv>
            <CommentIcon src="/images/Comment.png" />
            <CommentTitle>댓글</CommentTitle>
        </CommentTitleDiv>
        <NewComment>
            <NewCommentTop>
            <NewCommentInput
                onChange={props.onChangeCommentWriter}
                name="commentwriter"
                type="text"
                placeholder="작성자"
            />
            <NewCommentInput
                onChange={props.onChangeCommentPassword}
                name="commentpassword"
                type="text"
                placeholder="비밀번호"
            />
            </NewCommentTop>
            <NewCommentInput2
            onChange={props.onChangeCommentContents}
            name="commentcontents"
            placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
            <CommentSubmit>
            <CommentSubmitButton
                onClick={props.onClickSubmitComment}
                isActive={props.commentIsActive}
            >
                등록하기
            </CommentSubmitButton>
            </CommentSubmit>
        </NewComment>
        {props.commentData?.fetchBoardComments.map((el) => (
            <Comments key={el._id}>
            <>
                <Avatar2 src="/images/avatar.png" />
            </>
            <CommentDetail>
                <CommentTop>
                    <MainWrapper>
                        <CommentName>{el.writer}</CommentName>
                        <CommentStar>{el.rating}</CommentStar>
                    </MainWrapper>
                    <OptionWrapper>
                        <UpdateIcon
                            src="/images/editComment.png/"
                            onClick={props.onClickUpdateComment}
                        />
                        <DeleteIcon
                            src="/images/deleteComment.png/"
                            onClick={props.onClickDeleteComment}
                        />
                    </OptionWrapper>
                </CommentTop>
                <CommentContentsDiv>{el.contents}</CommentContentsDiv>
                <CommentDate>{el.createdAt.slice(0, 10)}</CommentDate>
            </CommentDetail>
            </Comments>
        ))}
    </CommentDiv>
  );
}
