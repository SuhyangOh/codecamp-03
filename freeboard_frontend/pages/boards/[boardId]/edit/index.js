import BoardNewPage from "../../../../src/components/units/board/new/BoardNew.Container";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
            createdAt
            _id
        }
    }
`


export default function BoardsEditPage() {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId }
    })
    
    return <BoardNewPage isEdit={true} data={data}/>
}
