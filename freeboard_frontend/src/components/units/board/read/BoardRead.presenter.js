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
  LocationIcon,
  LinkIcon,
  IconWrapper,
  TooltipDiv
} from "./BoardRead.styles";

import { CommentDiv, CommentIcon, CommentTitle, CommentTitleDiv } from "../comments/Comments.styles";
import { Youtube } from "../new/BoardNew.styles";
import { Tooltip } from "antd";


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
                        <Date> Date : 
                        {props.data ? props.data.fetchBoard.createdAt.slice(0,10) : "loading..."}
                        </Date>
                    </NameDateDiv>
                    <IconWrapper>
                        <LinkIcon src="/images/link.png" />
                        <Tooltip
                            placement="topRight"
                            title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
                            >
                            <LocationIcon src="/images/location.png" />
                        </Tooltip>
                    </IconWrapper>
                </UpperDiv>
                <TitleDiv>
                {props.data ? props.data.fetchBoard.title : "loading..."}
                </TitleDiv>
                <MiddleDiv>
                {props.data ? props.data.fetchBoard.contents : "loading..."}
                <Youtube
                    url={props.data?.fetchBoard.youtubeUrl}
                    width="486px"
                    height="240px"
                />
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
