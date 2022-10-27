import logo from './logo.svg';
import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import Home from './compo/Home';
import Logins from './compo/Logins';
import {Routes, Route} from 'react-router-dom';

//리덕스 재료 import
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function reducer(currentState, action) {
  //currentState : 현재 state 값
  //action : 컴포넌트에서 넘긴 message
  //currentState 기본 값 설정
  if (currentState==undefined) {
    return{
      id : '',
      pw : '',
      nick: ''
    } 
  } if (action.type =='join'){
    currentState.id = action.id;
  
    currentState.pw = action.pw;
  
    currentState.nick = action.nick;
  } else {
    console.log("실패");
  }
  //action에 있는 값(message)을 가져와서 state 변경 로직
  //변경후 반환
  return{...currentState};
}

const store = createStore(reducer);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/Join' element={<Join></Join>}></Route>
          <Route path='/Logins' element={<Logins></Logins>}></Route>
        </Routes>
      </Provider>
    </div>
  )
};

export default App;
