import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`
        mutation {
            createBoard(
                writer : "수향",
                title: "제목",
                contents: "내용"
            ){
                number
                message
            }
        }
    `

export default function QuizGraphqlApiHardPage() {
    const [ createBoard ] = useMutation(CREATE_BOARD)


    async function onClickApi() {
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return(
        <div>
            <button onClick={onClickApi}>GRAPHQL-API요청하기</button>
        </div>
    )
}