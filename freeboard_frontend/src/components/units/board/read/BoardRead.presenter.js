import {
  Button,
  Avatar,
  BottomDiv,
  Box,
  Date,
  MiddleDiv,
  Name,
  NameDateDiv,
  TitleDiv,
  UpperDiv,
  Wrapper,
} from "./BoardRead.styles";

import { CommentDiv, CommentIcon, CommentTitle, CommentTitleDiv } from "../comments/Comments.styles";

export default function BoardReadPageUI(props) {
  return (
      <>
        <Wrapper>
            <Box>
                <UpperDiv>
                <Avatar src="/images/avatar.png" />
                <NameDateDiv>
                    <Name>
                    {props.data ? props.data.fetchBoard.writer : "loading..."}
                    </Name>
                    <Date>
                    {props.data ? props.data.fetchBoard.createdAt : "loading..."}
                    </Date>
                </NameDateDiv>
                </UpperDiv>
                <TitleDiv>
                {props.data ? props.data.fetchBoard.title : "loading..."}
                </TitleDiv>
                <MiddleDiv>
                {props.data ? props.data.fetchBoard.contents : "loading..."}
                </MiddleDiv>
            </Box>
            <BottomDiv>
                <Button onClick={props.onClickMoveToBoardsList}>목록으로</Button>
                <Button onClick={props.onClickMoveToEdit}>수정하기</Button>
                <Button onClick={props.onClickDeleteBoard}>삭제하기</Button>
            </BottomDiv>
        </Wrapper>
        <CommentDiv>
            <CommentTitleDiv>
                <CommentIcon src="/images/Comment.png" />
                <CommentTitle>댓글</CommentTitle>
            </CommentTitleDiv>
        </CommentDiv>

    </>
  );
}
