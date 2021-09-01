import {ButtonWrapper, RadioLabel, InputWrapper, Title, Box, Picdiv,Setmaindiv, Setmain, PicButton, NameInput, Postcode, NamePw, SubmitButton, TitleInput, StoryInput, YoutubeInput, PostcodeInput, AddressInput, PostcodeSearch, Label} from '../../../styles/boards_new'
import { useState } from 'react';

export default function BoardsNewPage() {
    const [writer, setWriter] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

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

    function onClickSubmit(){
      if(writer === ""){
        setWriterError("작성자를 입력해주세요.")
      }
      if(password === ""){
        setPasswordError("비밀번호를 입력해주세요.")
      }
      if(title === ""){
        setTitleError("제목을 입력해주세요.")
      }
      if(contents === ""){
        setContentsError("내용을 입력해주세요.")
      }
      if(writer !== "" && password !== "" && title !== "" && contents !== ""){
        alert('게시물을 등록합니다~')
      }
    }

    return (
        <Box>
            <Title>게시물 등록</Title>
            <NamePw>
                <InputWrapper>
                    <Label>작성자</Label>
                    <NameInput name="writer" type="text" onChange={onChangeWriter} placeholder="이름을 적어주세요."/>
                    <Error>{writerError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <NameInput name="password" type="password" onChange={onChangePassword} placeholder="비밀번호를 입력해주세요."/>
                    <Error>{passwordError}</Error>
                </InputWrapper>
            </NamePw>
            <InputWrapper>
                <Label>제목</Label>
                <TitleInput name="title" type="text" onChange={onChangeTitle} placeholder="제목을 작성해주세요."/>
                <Error>{titleError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <StoryInput name="contents" onChange={onChangeContents} placeholder="내용을 작성해주세요."/>
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
                <SubmitButton>등록하기</SubmitButton>
            </ButtonWrapper>

            

        </Box>
    )
}