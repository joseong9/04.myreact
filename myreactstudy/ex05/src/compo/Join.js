import {useState, useRef} from 'react';
//useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있게끔 도와주는 기능이다!!
import {useNavigate} from 'react-router-dom';
//useNavigate : ---> 특정 주소값으로 화면을 전환 할 수 있는 역할!
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';

function Join(){
    const dispatch = useDispatch();
    
    const useId = useRef();
    const [inputid, setId] = useState();
    const [inputpw, setPw] = useState();
    const [inputnick, setNick] = useState();
    function reset(){
        setId('');
        setPw('');
        setNick('');
        //ref.current -> ref가 적용된 태그를 의미!
        useId.current.focus();
        //document.getElementById("test").focus();
    }

    const nav = useNavigate();
    

    //form : 주소값을 이동하면서 form 태그 안에 있는 내용도 같이 전달
    return(
        <>
            <h1>회원가입 페이지 입니다</h1>
                <form action='/Login' method='post'>
                    ID : <input name='id' onChange={(e)=>setId(e.target.value)} value={inputid} ref={useId} id="test"></input>
                    <br></br>
                    PW : <input name='pw' onChange={(e)=>setPw(e.target.value)} value={inputpw}></input>
                    <br></br>
                    Nick : <input name='nick' onChange={(e)=>setNick(e.target.value)} value={inputnick}></input>
                    <br></br>
                    <button onClick={()=> dispatch({type:'join', id:inputid, pw:inputpw, nick:inputnick})(nav('/login'))} type="button">Join</button>
                    <button onClick={reset} type="button">초기화</button>
                </form>
        </>
    );
}
export default Join;