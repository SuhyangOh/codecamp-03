import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import QuizBoardReadUI from "./BoardRead.presenter"
import { FETCH_BOARD } from './Boardwrite.queries'

export default function QuizBoardRead() {

    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables : { number: Number(router.query.number)}
    })

    return (
        <QuizBoardReadUI
            data = {data}
            router = {router}
        />


    )

}