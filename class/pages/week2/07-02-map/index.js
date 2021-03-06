import { gql, useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
            createdAt
        }
    }
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
`

const Column = styled.div`
    width: 20%
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number) {
            message
        }
    }
`

export default function MapSelectorPage() {
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARDS) // [{}, {}, {}]

    function onClickDelete(event) {
        deleteBoard({
            variables: {number: Number(event.target.id)},
            refetchQueries : [{query: FETCH_BOARDS}]
        })
    }

    return(
        <div>
            {data?.fetchBoards.map((el, index) => (
                <Row key={index}>
                    <Column><input type="checkbox"/></Column>
                    <Column>{index}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column>
                        <span><button id={el.number} onClick={onClickDelete}>삭제하기</button></span>
                    </Column>
                </Row>
            ))}
        </div>
    )
}