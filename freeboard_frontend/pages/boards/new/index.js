import {Title, Box, Picdiv,Setmaindiv, Setmain, PicButton, NameInput, Postcode, NamePw, SubmitButton, TitleInput, StoryInput, YoutubeInput, PostcodeInput, AddressInput, PostcodeSearch} from '../../../styles/boards_new'

export default function BoardsNewPage() {

    return (
        <Box>
            <Title>게시물 등록</Title>
            <NamePw>
                <div>
                    작성자<br />
                    <NameInput type="text" placeholder="이름을 적어주세요."/>
                </div>
                <div>
                비밀번호<br />
                <NameInput type="text" placeholder="비밀번호를 입력해주세요."/>
                </div>
            </NamePw>
            <div>
                제목
                <TitleInput type="text" placeholder="제목을 작성해주세요."/>
            </div>
            <div>
                내용
                <StoryInput type="text" placeholder="내용을 작성해주세요."/>
            </div>
            <div>
                주소<br />
                <Postcode>
                    <PostcodeInput type="text" placeholder="07250"/>
                    <PostcodeSearch>우편번호검색</PostcodeSearch>
                </Postcode>
                <AddressInput type="text" />
                <AddressInput type="text" />
            </div>
            <div>
                유튜브
                <YoutubeInput type="text" placeholder="링크를 복사해주세요."/>

            </div>
            사진첨부<br />
            <Picdiv>
                <PicButton>+<br />Upload</PicButton>
                <PicButton>+<br />Upload</PicButton>
                <PicButton>+<br />Upload</PicButton>
            </Picdiv>
            메인설정 <br />
            <Setmaindiv>
                <div>
                    <Setmain type="radio" name="main"/> 유튜브
                </div>
                <div>
                <Setmain type="radio" name="main"/> 사진
                </div>
            
            </Setmaindiv>

            <SubmitButton>등록하기</SubmitButton>

        </Box>
    )
}