export default function CodeLetPage() {

    function onClickCode() {
        const number = Math.random()
        const token = Math.floor(number * 1000000)
        document.getElementById("code").innerText = token
    }
    

    return (
        <div>
            <div id="code">000000</div>
            <button onClick={onClickCode}>인증번호전송</button>
        </div>
    )
}