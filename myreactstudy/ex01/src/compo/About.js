import {Link, useSearchParams} from 'react-router-dom'

function About() {
    const [paramsID, setParamsID] = useSearchParams();
    const [parmasNICK, setParamsNick] = useSearchParams();
    //쿼리스트링으로 넘긴 데이터는 paramsID에 저장
    const id = paramsID.get("id");
    const nick = parmasNICK.get("nick")
    return(
        <div>
            <h1>{id} 님 페이지 입니다</h1>
            <h1>닉네임은 {nick} 입니다</h1>
            <Link to='/'>메인 페이지로 이동</Link>
        </div>
    )
}

export default About;