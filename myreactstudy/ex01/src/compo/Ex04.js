import {useState, useEffect} from 'react'
function Ex04() {
    const [inputData, setInputData] = useState('로그인 실패');
    const [inputID, setInputID] = useState();
    const [inputPW, setInputPW] = useState();
    // 일반 변수는  화면이 렌더링 될 때 --> 다시 맨처음 초기값으로 돌아간다!
    // 화면이 다시 렌더링 된다 --> 상태값이 바뀔 때
    // let IDdata = "";
    // let PWdata = "";
    useEffect(function() {
        return click()
    },[inputPW])
    function ID(e) {
        setInputID(e.target.value);
        // IDdata = e.target.value;
    }
    function PW(e) {
        setInputPW(e.target.value);
        // PWdata = e.target.value;
    }
    function click() {
        if(inputID == "smhrd" && inputPW == "123") {
            setInputData("SMHRD님 환영합니다")
        } else {
            setInputData("로그인실패")
        }
    }
    return(
        <>
            <input onChange={ID} placeholder="아이디입력"></input>
            <br></br>
            <input onChange={PW} placeholder="비밀번호 입력"></input>
            <button onClick={click}>로그인</button>
            <h1>{inputData}</h1>
        </>
    )
}
export default Ex04;