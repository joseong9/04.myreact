import logo from './logo.svg';
import './App.css';
import Item1 from './compo/Item1';
import Item2 from './compo/Item2';
import Item3 from './compo/Item3';
import {useState} from 'react';

//리덕스 재료 준비
import {createStore} from 'redux';
//state 값을 저장시키는 역할
import {Provider} from 'react-redux';
import Right1 from './compo/Right1';
//state 값을 어떤 컴포넌트와 공유, 제공 할것인지 정의

function reducer(currentState, action) {
  if(currentState===undefined){
    return{
      number : 1
      //다른 컴포넌트에서 사용가능한 상태값
    };

  } 
  if (action.type =='plus'){
    currentState.number++;
  } else if(action.type=='name') {
    currentState.name="sg";
  }
  return {...currentState};
  //currentState 가 undefined 가 아닐 경우 처리방법
}
//store에 접근해서 state에 관련된 작업을 변경해주는 함수
//state와 action 값을 필요로함

const store = createStore(reducer);
//state 값을 저장시킬 저장소 생성


function App() {

  const [number, setNumber] = useState(3);

  return (
    <div id='container'>
      <h1>Root : {number}</h1>
        <div id="grid">
          <Provider store={store}>
            {/* 위에서 만든 store와 연결시킨뒤 해당 내용을 하위 컴포넌트에 제공 하위컴포넌트가 사용중인 다른 컴포넌트에도 제공 */}
            <Item1 num = {number}></Item1>
            <Right1></Right1>
          </Provider>
        </div>
    </div>
  );
}

export default App;