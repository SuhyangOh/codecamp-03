
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD } from './BoardNew.queries'
import BoardsNewPageUI from './BoardNew.presenter';
import { useMutation } from "@apollo/client";

export default function BoardNewPage() {

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

    function onChangeWriter(event){
      setWriter(event.target.value)
      if(event.target.value !== ""){
        setWriterError("")
      }
    }

    function onChangePassword(event){
      setPassword(event.target.value)
      if(event.target.value !== ""){
        setPasswordError("")
      }
    }

    function onChangeTitle(event){
      setTitle(event.target.value)
      if(event.target.value !== ""){
        setTitleError("")
      }
    }

    function onChangeContents(event){
      setContents(event.target.value)
      if(event.target.value !== ""){
        setContentsError("")
      }
    }

    async function onClickSubmit(){
		try {
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
			
			if(mywriter !== "" && mypassword !== "" && mytitle !== "" && mycontents !== ""){
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
				router.push(`/boards/read/${result.data.createBoard._id}`)
			}
		} catch(error) {
			console.log(error)
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
        />
    )
}