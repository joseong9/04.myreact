import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Main from './page/Main';
import Login from './page/Login';
import Join from './page/Join';


function App() {
  //Header 제작 <h3>JS(B)</h3> -> 클릭시 메인창 이동
  //Navbar 제작 버튼 2개 (로그인 회원가입) -> 클릭시 페이지 이동
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Join' element={<Join></Join>}></Route>
      </Routes>
    </div>
  );
}

export default App;
