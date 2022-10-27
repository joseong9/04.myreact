import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Main from './page/Main';
import Login from './page/Login';
import Join from './page/Join';


function App() {
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
