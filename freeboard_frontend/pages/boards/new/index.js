import {ButtonWrapper, RadioLabel, InputWrapper, Title, Box, Picdiv,Setmaindiv, Setmain, PicButton, NameInput, Postcode, NamePw, SubmitButton, TitleInput, StoryInput, YoutubeInput, PostcodeInput, AddressInput, PostcodeSearch, Label} from '../../../styles/boards_new'

export default function BoardsNewPage() {

    return (
        <Box>
            <Title>게시물 등록</Title>
            <NamePw>
                <InputWrapper>
                    <Label>작성자</Label>
                    <NameInput name="writer" type="text" placeholder="이름을 적어주세요."/>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <NameInput name="password" type="password" placeholder="비밀번호를 입력해주세요."/>
                </InputWrapper>
            </NamePw>
            <InputWrapper>
                <Label>제목</Label>
                <TitleInput name="title" type="text" placeholder="제목을 작성해주세요."/>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <StoryInput name="contents" placeholder="내용을 작성해주세요."/>
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