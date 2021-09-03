import { useRouter } from "next/dist/client/router";
import { BottomDiv, Box, Date, MiddleDiv, Name, NameDateDiv, ProfileIcon, TitleDiv, UpperDiv } from "../../../styles/read";


export default function ReadPage() {
    
    return(
        <Box>
            <UpperDiv>
                <ProfileIcon></ProfileIcon>
                <NameDateDiv>
                    <Name>노원두</Name>
                    <Date>Date : 2021.02.18</Date>
                </NameDateDiv>
            </UpperDiv>
            <TitleDiv>게시글 제목입니다.</TitleDiv>
            <MiddleDiv></MiddleDiv>
            <BottomDiv></BottomDiv>
        </Box>
    )
}