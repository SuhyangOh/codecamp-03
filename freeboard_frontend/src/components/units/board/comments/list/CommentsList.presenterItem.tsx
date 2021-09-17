import { useMutation } from "@apollo/client";
import { Rate } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation, IMutationDeleteBoardCommentArgs } from "../../../../../commons/types/generated/types";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "../Comments.queries";
import {
    Comments,
    CommentTop,
    CommentName,
    CommentContentsDiv,
    CommentDate,
    Avatar2,
    CommentDetail,
    OptionWrapper,
    UpdateIcon,
    DeleteIcon,
    MainWrapper,
    CommentDiv,
  } from "../Comments.styles";
import BoardCommentsWrite from "../write/CommentsWrite.presenter";


export default function BoardCommentListUIItem(props) {
    const router = useRouter();
    const [isEdit, setIsEdit] = useState(false);

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    function onClickUpdate() {
        setIsEdit(true)
    }

    async function onClickDelete() {
        const myPassword = prompt("비밀번호를 입력해 주세요.");
        try {
            await deleteBoardComment({
                variables: {
                password: myPassword,
                boardCommentId: props.el?._id,
                },
                refetchQueries: [
                {
                    query: FETCH_BOARD_COMMENTS,
                    variables: { boardId: router.query.boardId },
                },
                ],
                
            });
            alert("댓글이 삭제되었습니다.")
            } catch (error) {
            alert(error.message);
    }
    }

    return (
        <CommentDiv>
            {!isEdit && (
                <Comments>
                    <Avatar2 src="/images/avatar.png" />
                    <CommentDetail>
                        <CommentTop>
                            <MainWrapper>
                                <CommentName>{props.el?.writer}</CommentName>
                                <Rate value={props.el?.rating} disabled={true}/>
                            </MainWrapper>
                            <OptionWrapper>
                                <UpdateIcon
                                    src="/images/editComment.png/"
                                    onClick={onClickUpdate}
                                />
                                <DeleteIcon
                                    src="/images/deleteComment.png/"
                                    onClick={onClickDelete}
                                />
                            </OptionWrapper>
                        </CommentTop>
                        <CommentContentsDiv>{props.el?.contents}</CommentContentsDiv>
                        <CommentDate>{props.el?.createdAt.slice(0, 10)}</CommentDate>
                    </CommentDetail>
                </Comments>
            )}
            {isEdit && (
                <BoardCommentsWrite
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    el={props.el}
                />
                   
            )}
        </CommentDiv>
    )
}