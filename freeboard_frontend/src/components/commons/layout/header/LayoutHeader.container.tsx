import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
    const router = useRouter();

    function onClickMoveToBoardList(event) {
        router.push(`/boards/list`);
    }
    function onClickSignIn(event) {
        router.push(`/login`)
    }
    function onClickMyStarbucks() {
        router.push(`/mystarbucks`)
    }

    return (
        <LayoutHeaderUI 
            onClickMoveToBoardList={onClickMoveToBoardList}
            onClickSignIn={onClickSignIn}
            onClickMyStarbucks={onClickMyStarbucks}
        />

    )
}