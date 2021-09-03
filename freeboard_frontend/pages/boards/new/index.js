import {ButtonWrapper, RadioLabel, InputWrapper, Title, Box, Picdiv,Setmaindiv, Setmain, PicButton, NameInput, Postcode, NamePw, SubmitButton, TitleInput, StoryInput, YoutubeInput, PostcodeInput, AddressInput, PostcodeSearch, Label, Error} from '../../../styles/boards_new'
import { useState } from 'react';
import { gql, useMutation } from "@apollo/client"
import { useRouter } from 'next/router';

const CREATE_BOARD = gql`
	mutation createBoard($createBoardInput: CreateBoardInput!){
    	createBoard(
			createBoardInput: $createBoardInput) {
      		_id
		} 
	}
`

export default function BoardsNewPage() {

    const router = useRouter();

    const [ createBoard ] = useMutation(CREATE_BOARD)

    const [mywriter, setWriter] = useState('')
    const [mypassword, setPassword] = useState('')
    const [mytitle, setTitle] = useState('')
    const [mycontents, setContents] = useState('')

    const [writerError, setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')

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
        <Box>
            <Title>게시물 등록</Title>
            <NamePw>
                <InputWrapper>
                    <Label>작성자</Label>
                    <NameInput name="writer" type="text" placeholder="이름을 적어주세요."onChange={onChangeWriter} />
                    <Error>{writerError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <NameInput name="password" type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword}/>
                    <Error>{passwordError}</Error>
                </InputWrapper>
            </NamePw>
            <InputWrapper>
                <Label>제목</Label>
                <TitleInput name="title" type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle}/>
                <Error>{titleError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <StoryInput name="contents" placeholder="내용을 작성해주세요." onChange={onChangeContents}/>
                <Error>{contentsError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <Postcode>
                    <PostcodeInput type="text" name="zipcode" placeholder="07250"/>
                    <PostcodeSearch>우편번호 검색</PostcodeSearch>
                </Postcode>
                <AddressInput type="text" />
                <AddressInput type="text" />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <YoutubeInput type="text" placeholder="링크를 복사해주세요."/>
            </InputWrapper>
            <Picdiv>
                <Label>사진첨부</Label>
                <PicButton>+<br />Upload</PicButton>
                <PicButton>+<br />Upload</PicButton>
                <PicButton>+<br />Upload</PicButton>
            </Picdiv>
            <Setmaindiv>
                <Label>메인설정</Label>
                <Setmain type="radio" id="youtube" name="radio-button" /> 
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <Setmain type="radio" id="image" name="radio-button" /> 
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </Setmaindiv>

            <ButtonWrapper>
                <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
            </ButtonWrapper>

            

        </Box>
    )
}