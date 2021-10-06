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
  LikeWrapper,
  LikeIcon,
  LikeCount,
  DislikeIcon,
  DislikeCount,
  ImageWrapper,
  Image
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
                <ImageWrapper>
                    {props.data?.fetchBoard.images // ["고양이이미지.png", "강아지이미지.png"]     ""  " "
                    ?.filter((el: string) => el) // ["고양이이미지.png", "강아지이미지.png"]
                    .map((el: string) => (
                        <Image key={el} src={`https://storage.googleapis.com/${el}`} />
                    ))}
                </ImageWrapper>
                <MiddleDiv>
                {props.data ? props.data.fetchBoard.contents : "loading..."}
                <Youtube
                    url={props.data?.fetchBoard.youtubeUrl}
                    width="486px"
                    height="240px"
                />
                </MiddleDiv>
                <LikeWrapper>
            <IconWrapper>
              <LikeIcon onClick={props.onClickLike} />
              <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
            </IconWrapper>
            <IconWrapper>
              <DislikeIcon onClick={props.onClickDislike} />
              <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
            </IconWrapper>
          </LikeWrapper>
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
