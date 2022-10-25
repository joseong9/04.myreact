import logo from './logo.svg';
import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import Home from './compo/Home';
import Logins from './compo/Logins';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Join' element={<Join></Join>}></Route>
      <Route path='/Logins' element={<Logins></Logins>}></Route>
    </Routes>
  )
};

export default App;
