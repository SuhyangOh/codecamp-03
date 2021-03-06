import { useMutation} from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from "../Comments.queries";
import {
    IMutation,
    IMutationCreateBoardCommentArgs,
    IMutationUpdateBoardCommentArgs,
  } from "../../../../../commons/types/generated/types";
import BoardCommentsWriteUI from "./CommentsWrite.presenter";

export default function BoardCommentsWrite(props) {

    let a = 0;
    if (props.isEdit) {
       a = props.el?.contents.length;
    }
    const router = useRouter();

    const [myCommentWriter, setCommentWriter] = useState("");
    const [myCommentPassword, setCommentPassword] = useState("");
    const [myCommentContents, setCommentContents] = useState("");
    const [myCommentRate, setMyCommentRate] = useState(0);
    const [commentIsActive, setCommentIsActive] = useState(false);
    const [contextLength, setContextLength] = useState(a);
    const [updateCommentIsActive, setUpdateCommentIsActive] = useState(false)

    

    function handleRate(value: number) {
        setMyCommentRate(value);
    }

    const [createBoardComment] = useMutation<
        Pick<IMutation, "createBoardComment">,
        IMutationCreateBoardCommentArgs
    >(CREATE_BOARD_COMMENT);

    const [updateBoardComment] = useMutation<
        Pick<IMutation, "updateBoardComment">,
        IMutationUpdateBoardCommentArgs
    >(UPDATE_BOARD_COMMENT);

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
        // setUpdateCommentIsActive(true)
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
        setContextLength(event.target.value.length)
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
                        boardId: String(router.query.boardId),
                        createBoardCommentInput: {
                            writer: myCommentWriter,
                            password: myCommentPassword,
                            contents: myCommentContents,
                            rating: myCommentRate,
                        },
                        },
                        refetchQueries: [
                        {
                            query: FETCH_BOARD_COMMENTS,
                            variables: { boardId: router.query.boardId },
                        },
                        ],
                    });
                    alert("????????? ???????????????~");
                }
            } catch(error) {
                alert(error.message)
            }
            
    }
        
    async function onClickCommentUpdate(event) {
        if (!myCommentContents) {
            alert("????????? ???????????? ???????????????.");
            return;
        }
        if (!myCommentPassword) {
            alert("??????????????? ???????????? ???????????????.");
            return;
        }
        try {
            await updateBoardComment({
                variables: {
                updateBoardCommentInput: { contents: myCommentContents },
                password: myCommentPassword,
                boardCommentId: event.target.id,
                },
                refetchQueries: [
                {
                    query: FETCH_BOARD_COMMENTS,
                    variables: { boardId: router.query.boardId },
                },
                ],
        });
            props.setIsEdit(false);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <BoardCommentsWriteUI
            onChangeCommentContents={onChangeCommentContents}
            onChangeCommentWriter={onChangeCommentWriter}
            onChangeCommentPassword={onChangeCommentPassword}

            onClickSubmitComment={onClickSubmitComment}

            commentIsActive={commentIsActive}

            onClickCommentUpdate={onClickCommentUpdate}

            isEdit={props.isEdit}
            el={props.el}
            
            contextLength={contextLength}
            handleRate={handleRate}
            updateCommentIsActive={updateCommentIsActive}
        />
    );
}
