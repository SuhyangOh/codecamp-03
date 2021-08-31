export default function HelloLetPage() {

    function zzz() {
        document.getElementById("aaa").innerText = "반갑습니다."
    }
    
    // return 위쪽은 Javascript 쓰는 곳
    // return 아래에는 HTML 쓰는 곳
    return(
        <button id="aaa" onClick={zzz}>안녕하세요</button>
    )
}