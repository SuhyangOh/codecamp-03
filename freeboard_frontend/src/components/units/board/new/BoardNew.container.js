
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from './BoardNew.queries'
import BoardsNewPageUI from './BoardNew.presenter';
import { useMutation } from "@apollo/client";

export default function BoardNewPage(props) {

    const router = useRouter();
    
    const [mywriter, setWriter] = useState('')
    const [mypassword, setPassword] = useState('')
    const [mytitle, setTitle] = useState('')
    const [mycontents, setContents] = useState('')

    const [writerError, setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')

	const [createBoard] = useMutation(CREATE_BOARD);
	const [updateBoard] = useMutation(UPDATE_BOARD);

	const [isActive, setIsActive] = useState(false);

    function onChangeWriter(event){
		setWriter(event.target.value)
		if(event.target.value !== ""){
			setWriterError("")
		}
		if(event.target.value !== "" && mypassword !== "" && mytitle !== "" && mycontents !== ""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
    }

    function onChangePassword(event){
    	setPassword(event.target.value)
		if(event.target.value !== ""){
			setPasswordError("")
		}
		if(mywriter !== "" && event.target.value !== "" && mytitle !== "" && mycontents !== ""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
    }

    function onChangeTitle(event){
		setTitle(event.target.value)
		if(event.target.value !== ""){
			setTitleError("")
		}
		if(mywriter !== "" && mypassword !== "" && event.target.value !== "" && mycontents !== ""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
    }

    function onChangeContents(event){
		setContents(event.target.value)
		if(event.target.value !== ""){
			setContentsError("")
		}
		if(mywriter !== "" && mypassword !== "" && mytitle !== "" && event.target.value !== ""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
    }
	
	function checkEmptySpace() {
		if(mywriter === ""){
			setWriterError("작성자를 입력해주세요.")
		}
		if(mypassword === ""){
			setPasswordError("비밀번호를 입력해주세요.")
		}
		if(mytitle === ""){
			setTitleError("제목을 입력해주세요.")
		}
		if(mycontents === ""){
			setContentsError("내용을 입력해주세요.")
		}
	}

    async function onClickSubmit(){
		try {
			checkEmptySpace
			if(isActive){
				const result = await createBoard({
				variables : {
					createBoardInput : 
					{
						writer: mywriter,
						password: mypassword,
						title: mytitle,
						contents: mycontents
					}
				}
				})
				alert('게시물을 등록합니다~')
				router.push(`/boards/${result.data.createBoard._id}`)
			}
		} catch(error) {
			console.log(error)
		}
	}  

	async function onClickEdit(){
		try {
			await updateBoard({
				variables : {
					password: mypassword,
					boardId: router.query.boardId,
					updateBoardInput: { title: mytitle, contents: mycontents, },
				}
			})
			alert('게시물을 수정합니다~')
			router.push(`/boards/${router.query.boardId}`)
		} catch(error) {
			console.log(error.message)
		}
	}  


    return (
        <BoardsNewPageUI
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}

            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}

			isActive={isActive}
			isEdit={props.isEdit}
			onClickEdit={onClickEdit}
			data={props.data}
        />
    )
}