import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
    border: 1px solid black;
`
export const SearchTitle = styled.div`
    width: 776px;
    height: 52px;
    background: #F2F2F2;
    border-radius: 10px;
`
export const Table = styled.div`
    height : 582px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-top: 1px solid black;
    border-bottom: 1px solid black;

`
export const Row = styled.div`
    height : 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #BDBDBD;
`
export const Column = styled.div`
    text-align: center;
    width: 20%
`
export const BottomDiv = styled.div`
    height: 100px;
`

export const FETCH_BOARDS = gql`
    query {
        fetchBoards{
            writer
            title
            contents
            createdAt
            _id
        }
    }
`

export default function BoardListPage() {
    const { data } = useQuery(FETCH_BOARDS)

    return(
        <Wrapper>
            <SearchTitle></SearchTitle>
            <Table>
                <Row>
                    <Column>번호</Column>
                    <Column>제목</Column>
                    <Column>작성자</Column>
                    <Column>날짜</Column>
                </Row>
                {data?.fetchBoards.map((el, index) => (
                    <Row key={el._id}>
                        <Column>{index}</Column>
                        <Column>{el.title}</Column>
                        <Column>{el.writer}</Column>
                        <Column>{el.createdAt}</Column>
                    </Row>
                ))}
            </Table>
            <BottomDiv></BottomDiv>
        </Wrapper>
    )
}