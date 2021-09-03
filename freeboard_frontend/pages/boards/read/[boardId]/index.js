import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import { BottomDiv, Box, Date, MiddleDiv, Name, NameDateDiv, ProfileIcon, TitleDiv, UpperDiv } from "../../../../styles/read";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
        }
    }
`


export default function ReadPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables : { boardId: router.query.boardId}
    })
    console.log(data)


    return(
        <Box>
            <UpperDiv>
                <ProfileIcon></ProfileIcon>
                <NameDateDiv>
                    <Name>{data ? data.fetchBoard.writer : "loading..."}</Name>
                    <Date>Date : 2021.02.18</Date>
                </NameDateDiv>
            </UpperDiv>
            <TitleDiv>{data ? data.fetchBoard.title : "loading..."}</TitleDiv>
            <MiddleDiv>{data ? data.fetchBoard.contents : "loading..."}</MiddleDiv>
            <BottomDiv></BottomDiv>
        </Box>
    )
}