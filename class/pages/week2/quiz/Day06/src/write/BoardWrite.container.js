import { useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import QuizBoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function QuizBoardWrite() {
    const router = useRouter()

    const [ createBoard ] = useMutation(CREATE_BOARD)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    const [qqq, setQqq ] = useState(false)

    function onChangeMyWriter(event) {
        setMyWriter(event.target.value)
        if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setQqq(true)
        }
    }

    function onChangeMyTitle(event) {
        setMyTitle(event.target.value)
        if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setQqq(true)
        }
    }

    function onChangeMyContents(event) {
        setMyContents(event.target.value)
        if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
            setQqq(true)
        }
    }

    async function aaa() {
        try {
            const result = await createBoard({
                variables: { 
                    writer: myWriter, 
                    title: myTitle, 
                    contents: myContents }
            })
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push('/05-06-dynamic-board-read/n' + result.data.createBoard.number) : 옛날 방식
            router.push(`/quiz/Day06/board/read/${result.data.createBoard.number}`)
        
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <QuizBoardWriteUI
            onChangeMyWriter={onChangeMyWriter}
            onChangeMyTitle={onChangeMyTitle}
            onChangeMyContents={onChangeMyContents}
            aaa={aaa}
            qqq={qqq}
        />

    )
}