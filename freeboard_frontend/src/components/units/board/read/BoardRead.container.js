import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardReadPageUI from "./BoardRead.presenter";
import { useState } from "react";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_BOARD_COMMENTS,
} from "./BoardRead.queries";

export default function BoardReadPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { page: 1, boardId: router.query.boardId },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  async function onClickDeleteBoard() {
    await deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    alert("게시물을 삭제합니다~");
    router.push(`/boards/list`);
  }

  function onClickMoveToBoardsList() {
    router.push("/boards/list");
  }

  function onClickMoveToEdit() {
    router.push(`/boards/${router.query.boardId}/edit`);
  }

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
    console.log(commentData);
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
  }

  return (
    <BoardReadPageUI
      router={router}
      data={data}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickMoveToBoardsList={onClickMoveToBoardsList}
      onClickMoveToEdit={onClickMoveToEdit}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickSubmitComment={onClickSubmitComment}
      commentIsActive={commentIsActive}
      commentData={commentData}
    />
  );
}
