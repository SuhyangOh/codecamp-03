import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_BOARD = gql`
    mutation createBoard(
        $writer: String, $title: String, $contents: String) {
            createBoard(
                writer: $writer,
                title : $title,
                contents: $contents
            ){message}
    }
`

export default function GraphqlApiMutationPage() {
    const [ createBoard ] = useMutation(CREATE_BOARD)

    const [ myWriter, setWriter ] = useState("")
    const [ myTitle, setTitle] = useState("")
    const [ myContents, setContents ] = useState("")

    function onChangeWriter(event) {
        setWriter(event.target.value)
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    function onChangeContents(event) {
        setContents(event.target.value)
    }

    async function onClickApi() {
        const result = await createBoard({
            variables: {
                writer: myWriter,
                title: myTitle,
                contents: myContents
            }
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }
    
    return(
        <div>
            작성자 : <input type="text" onChange={onChangeWriter} /> <br />
            제목 : <input type="text" onChange={onChangeTitle} /> <br />
            내용 : <input type="text" onChange={onChangeContents} /> <br />

            <button onClick={onClickApi}>GRAPHQL-API요청하기</button>
        </div>

    )
}