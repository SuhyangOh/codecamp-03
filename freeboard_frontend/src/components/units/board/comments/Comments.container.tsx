import CommentsPageUI from "./Comments.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD_COMMENT, DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./Comments.queries";
import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
  } from "../../../../commons/types/generated/types";

export default function CommentsPage() {
  const router = useRouter();
  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { page: 1, boardId: router.query.boardId },
  });

  const [myCommentWriter, setCommentWriter] = useState("");
  const [myCommentPassword, setCommentPassword] = useState("");
  const [myCommentContents, setCommentContents] = useState("");
  const [myCommentRating, setmyCommentRating] = useState(5);

  const [commentIsActive, setCommentIsActive] = useState(false);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  function onChangeCommentWriter(event) {
    setCommentWriter(event.target.value);
    if (
      event.target.value !== "" &&
      myCommentPassword !== "" &&
      myCommentContents !== ""
    ) {
      setCommentIsActive(true);
    } else {
      setCommentIsActive(false);
    }
  }

  function onChangeCommentPassword(event) {
    setCommentPassword(event.target.value);
    if (
      myCommentWriter !== "" &&
      event.target.value !== "" &&
      myCommentContents !== ""
    ) {
      setCommentIsActive(true);
    } else {
      setCommentIsActive(false);
    }
  }

  function onChangeCommentContents(event) {
    setCommentContents(event.target.value);
    if (
        myCommentWriter !== "" &&
        myCommentPassword !== "" &&
        event.target.value !== ""
    ) {
      setCommentIsActive(true);
    } else {
      setCommentIsActive(false);
    }
  }

    async function onClickSubmitComment() {
        try{
            if (commentIsActive) {
                await createBoardComment({
                    variables: {
                    boardId: router.query.boardId,
                    createBoardCommentInput: {
                        writer: myCommentWriter,
                        password: myCommentPassword,
                        contents: myCommentContents,
                        rating: myCommentRating,
                    },
                    },
                    refetchQueries: [
                        {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                        },
                    ],
                });
                alert("댓글을 등록합니다~");
                }
        } catch(error) {
            alert(error.message)
        }
        
    }

    const [isEdit, setIsEdit] = useState(false);

    function onClickUpdate() {
        setIsEdit(true);
    }

    const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

    
    async function onClickDelete() {
        const myPassword = prompt("비밀번호를 입력해 주세요.");
        try {
          await deleteBoardComment({
            variables: {
              password: myPassword,
              boardCommentId: String(router.query.boardId),
            },
            refetchQueries: [
              {
                query: FETCH_BOARD_COMMENTS,
                variables: { boardId: router.query.boardId },
              },
            ],
          });
        } catch (error) {
          alert(error.message);
        }
    }

  return (
    <CommentsPageUI
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickSubmitComment={onClickSubmitComment}
      commentIsActive={commentIsActive}
      commentData={commentData}

      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
    />
  );
}
