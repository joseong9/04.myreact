import logo from './logo.svg';
import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import Home from './compo/Home';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Join' element={<Join></Join>}></Route>
    </Routes>
  )
};

export default App;
