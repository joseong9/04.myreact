import {Link, useSearchParmas, useNavigate} from 'react-router-dom'

function Login() {


    return(
        <div>
            <h1>로그인 페이지 입니다</h1>
            ID : <input placeholder="아이디 입력"></input>
            <br></br>
            PW : <input placeholder="비밀번호 입력"></input>
            <br></br>
            <Link to='/Join'>회원가입 페이지</Link>
            <br></br>
            <Link to='/'>홈페이지</Link>
            <br></br>
            <button>로그인</button>
        </div>
    )
}
export default Login;