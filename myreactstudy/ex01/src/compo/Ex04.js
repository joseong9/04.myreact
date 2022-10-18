import {useState} from 'react'

function Ex04() {
    let id = ''
    let pw = ''

    const [inputData, setInputData] = useState("");

    function getid(e){
        id = e.target.value;
    }

    function getpw(e){
        pw = e.target.value;
    }

    function login(e){
    if (id == "smhrd" && pw == "123") {
        setInputData("SMHRD님 환영합니다")
    } else {
        setInputData("로그인 실패")
    }
}
    return(
        <h1>
            <input placeholder="아이디 입력" onChange={getid}></input>
            <br></br>
            <input onChange={getpw} placeholder="비밀번호 입력"></input>
            <button onClick={login}>로그인</button>
            <h1>{inputData}</h1>
        </h1>
    )
}


export default Ex04;