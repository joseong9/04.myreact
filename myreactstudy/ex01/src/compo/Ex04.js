import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';

function Ex04() {
    
    const nav = useNavigate();

    const [inputData, setInputData] = useState('로그인 실패');
    const [inputID, setInputID] = useState();
    const [inputPW, setInputPW] = useState();
    const [inputNick, setInputNick] = useState();

    // 일반 변수는  화면이 렌더링 될 때 --> 다시 맨처음 초기값으로 돌아간다!
    // 화면이 다시 렌더링 된다 --> 상태값이 바뀔 때
    // let IDdata = "";
    // let PWdata = "";

    useEffect(function() {
        return click()
    },[inputNick])


    function ID(e) {
        setInputID(e.target.value);
        // IDdata = e.target.value;
    }
    function PW(e) {
        setInputPW(e.target.value);
        // PWdata = e.target.value;
    }
    function NICK(e) {
        setInputNick(e.target.value);
    }

    function click() {
        if(inputID == "smhrd" && inputPW == "123") {
            setInputData("SMHRD님 환영합니다")
            nav("/about?id=smhrd&nick="+inputNick);
        } else {
            setInputData("다시 입력해주세요.")
        }
    }

    return(
        <>
            ID : <input onChange={ID} placeholder="아이디입력"></input>
            <br></br>
            PW : <input onChange={PW} placeholder="비밀번호 입력"></input>
            <br></br>
            NICK : <input placeholder='닉네임 임력' onChange={(e)=> setInputNick(e.target.value)}></input> {/* 닉네임을 입력할 input tag */}
            <br></br>
            <Link to="/">메인 페이지로 이동</Link>
            {/*<button onClick={click}>로그인</button> */}
            <h1>{inputData}</h1>
        </>
    )
}

export default Ex04;