import {useSearchParams, useNavigate} from 'react-router-dom'

function Logins() {
    const [params, setParams] = useSearchParams();

    const id = params.get("id");
    const nick = params.get("nick")

    const nav = useNavigate();
    function home() {
        nav("/");
    }
    return(
        <div>
            <h1>회원 페이지 입니다</h1>
            <h1>{nick} 님 환영합니다</h1>
            <h1>ID 는 {id} 입니다</h1>
            <button onClick={home}>홈페이지</button>
        </div>
    )
}
export default Logins;