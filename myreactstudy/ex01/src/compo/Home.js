import {Link} from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>Home</h1>
            <p>Main Page</p>
            {/* React 에서 라우터를 통한 페이지 이동을 할 때는 Link 태그를 선호 */}
            <a href="./login">로그인 페이지로 이동</a>
            <br></br>
            <Link to="./login">로그인 페이지로 이동2</Link>
            <br></br>
            <Link to="./about">소개 페이지로 이동</Link>
        </div>
    )
}

export default Home;