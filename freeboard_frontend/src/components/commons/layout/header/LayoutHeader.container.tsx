import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
    const router = useRouter();

    function onClickMoveToBoardList(event) {
        router.push(`/boards/list`);
    }

    return (
        <LayoutHeaderUI 
            onClickMoveToBoardList={onClickMoveToBoardList}
        />

    )
}