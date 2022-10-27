import {Link, useSearchParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'

import {useDispatch} from 'react-redux';

import {useSelector} from 'react-redux';

function Login() {
    const dispatch = useDispatch();
    const id = useSelector((state)=> state.id);
    const pw = useSelector((state)=> state.pw);
    //const [paramsID, setParamsID] = useSearchParams();
    //const [parmasPW, setParamsPW] = useSearchParams();
    //const [parmasNICK, setParamsNICK] = useSearchParams();
    //쿼리스트링으로 넘긴 데이터는 paramsID에 저장
    //const id = paramsID.get("id");
    //const pw = parmasPW.get("pw")
    //const nick = parmasNICK.get("nick")

    const [Id, setId] = useState();
    const [Pw, setPw] = useState();

    const nav = useNavigate();

    function login() {
        
        if(id == Id && pw == Pw) {
            console.log("로그인 성공")
            nav("/Logins");
        } else {
            console.log("로그인 실패")
        }
    }

    return(
        <div>
            <h1>로그인 페이지 입니다</h1>
            <form action={'/Logins'}>
                ID : <input name='id' onChange={(e)=>setId(e.target.value)} value={Id} placeholder="아이디 입력"></input>
                <br></br>
                PW : <input name='pw' onChange={(e)=>setPw(e.target.value)} value={Pw} placeholder="비밀번호 입력"></input>
                <br></br>
                <Link to='/Join' type='Link'>회원가입 페이지</Link>
                <br></br>
                <Link to='/' type='Link'>홈페이지</Link>
                <br></br>
                {/* <input value={nick} style={{display:'none'}} name="nick"></input> */}
                <button onClick={login} type="button">로그인</button>
            </form>
        </div>
    )
}

export default Login;