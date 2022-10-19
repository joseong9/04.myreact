import {useState} from 'react'
function Ex04(){
    //const [inputId, setInputId] = useState('');
    //const [inputPw, setInputPw] = useState('');
    const [result , setResult] = useState('로그인 실패')

    let inputId = "";
    let inputPw = "";
    //일반 변수는 화면이 렌더링 될때 다시 처음 초기값으로 돌아간다
    //화면이 다시 렌더링 됨(상태값이 바뀔때)

    function getId(e){
        //setInputId(e.target.value);
        inputId = e.target.value;
    }
    function getPw(e){
        //setInputPw(e.target.value);
        inputPw = e.target.value;
    }
    function chResult(){
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
        }
       else{
            setResult("다시 입력해주세요")
       }
    }
    return(
        <>
            <input onChange={getId}></input>
            <br></br>
            <input onChange={getPw}></input>
            <button onClick={chResult}>로그인</button>
            <h1>{result}</h1>
        </>
    )
}
export default Ex04;