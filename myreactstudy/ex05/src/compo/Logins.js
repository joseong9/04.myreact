import {useSearchParams, useNavigate} from 'react-router-dom'

function Logins() {
    const [paramsID, setParamsID] = useSearchParams();
    const [parmasNICK, setParamsNick] = useSearchParams();

    const id = paramsID.get("id");
    const nick = parmasNICK.get("nick")

    const nav = useNavigate();
    function home() {
        nav("/Home");
    }
    return(
        <div>
            <h1>{id} 님 환영합니다</h1>
            <h1>닉네임은 {nick} 입니다</h1>
            <button onClick={home}>홈페이지</button>
        </div>
    )
}