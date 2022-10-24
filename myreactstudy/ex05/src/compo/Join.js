import {useRef, useState} from 'react'
//uesRef : 컴포넌트 안에 특정DOM(요소)를 선택할 수 있게 도와주는 기능

function Join() {

    const useID = useRef();

    const [inputID, setInputID] = useState('');
    const [inputPW, setInputPW] = useState('');
    const [inputNick, setInputNICK] = useState('');

    function ID(e) {
        setInputID(e.target.value);
        // IDdata = e.target.value;
    }

    function PW(e) {
        setInputPW(e.target.value);
        // IDdata = e.target.value;
    }

    function NICK(e) {
        setInputNICK(e.target.value);
        // IDdata = e.target.value;
    }

    function click() {
        setInputID('')
        setInputPW('') 
        setInputNICK('')
        //ref.current는 ref가 적용된 태그 
        useID.current.focus();
    }


    return(
        <div>
            <h1>회원가입 페이지입니다</h1>
            ID : <input placeholder='아이디 입력' onChange={(e) => setInputID(e.target.value)} value={inputID} ref={useID}></input>
            <br></br>
            PW : <input placeholder='비밀번호 입력' onChange={(e) => setInputPW(e.target.value)} value={inputPW}></input>
            <br></br>
            NICK : <input placeholder='닉네임 입력' onChange={(e) => setInputNICK(e.target.value)} value={inputNick}></input>
            <br></br>
            <button>Join</button>
            <button onClick={click}>초기화</button>
        </div>
    );
};

export default Join;