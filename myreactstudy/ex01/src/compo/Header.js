import {Link} from 'react-router-dom'


function Header() {
    return(
        <div>
            <h1>머릿글</h1>
            <Link to='/'>메인페이지</Link>
        </div>
    )
}

export default Header;