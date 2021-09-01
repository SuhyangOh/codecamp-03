import { useState } from 'react'

export default function CodeStatePage() {
    const [ code, setCode ] = useState("000000")

    function onClickCode() {
        const token = Math.floor(Math.random() * 1000000)
        setCode(token)
    }
    
    return(
        <div>
            <div>{code}</div>
            <button onClick={onClickCode}>인증번호전송</button>
        </div>
    )
}