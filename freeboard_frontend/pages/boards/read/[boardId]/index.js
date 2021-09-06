import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import { Button, Avatar, BottomDiv, Box, Date, MiddleDiv, Name, NameDateDiv, TitleDiv, UpperDiv, Wrapper } from "../../../../styles/read";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
            createdAt
        }
    }
`


export default function ReadPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables : { boardId: router.query.boardId}
    });


    return(
        <Wrapper>
            <Box>
                <UpperDiv>
                    <Avatar src="/images/avatar.png" />
                    <NameDateDiv>
                        <Name>{data ? data.fetchBoard.writer : "loading..."}</Name>
                        <Date>{data?.fetchBoard.createdAt}</Date>
                    </NameDateDiv>
                </UpperDiv>
                <TitleDiv>{data ? data.fetchBoard.title : "loading..."}</TitleDiv>
                <MiddleDiv>{data ? data.fetchBoard.contents : "loading..."}</MiddleDiv>
            </Box>
            <BottomDiv>
                <Button>목록으로</Button>
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </BottomDiv>
        </Wrapper>
    )
}