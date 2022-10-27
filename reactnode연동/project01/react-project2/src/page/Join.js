import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Join = () => {

  const idRef = useRef();
  const pwRef = useRef();
  const nav = useNavigate();
  
  const handelJoin = (event) => {
    console.log("handleJoin")
    event.preventDefault()
    console.log(idRef.current.value)
    console.log(pwRef.current.value)
    
    let userData = {
      id: idRef.current.value,
      pw: pwRef.current.value
    }

    //axios 이용해서 데이터 보내기
    //axios.post(보낼주소, {보낼데이터})

    axios.post('/127.0.0.1:3001/joinData',{
      user : userData
    })
    .then(()=>{
      console.log('성공')
      alert('회원가입에 성공하셨습니다')
      nav('/')
    })//성공
    .catch(()=>{console.log('성공')})//실패
  }
  return (
    <div>
        <h3>회원가입</h3>
      <form onSubmit={handelJoin}>
        <input name='ID' type="text" ref={idRef} placeholder='아이디 입력'></input>
        <input name='PW' type="password" ref={pwRef} placeholder='비밀번호 입력'></input>
        <input type="submit" value='가입'></input>
      </form>
    </div>
  )
}

export default Join
