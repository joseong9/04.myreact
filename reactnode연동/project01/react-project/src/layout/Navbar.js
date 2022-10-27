import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <Link to='./Join'>
        <button>회원가입</button>
      </Link>
      <Link to='./Login'>
        <button>로그인</button>
      </Link>
      <Link to='./'>
        <button>메인</button>
      </Link>
    </div>
  )
}

export default Navbar