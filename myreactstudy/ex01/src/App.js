import logo from './logo.svg';
import './App.css';
import Ex01 from './compo/Ex01';    //Ex01파일 불러오기
import Ex02 from './compo/Ex02';
import Ex03 from './compo/Ex03';
import Ex04 from './compo/Ex04';

function App() {     // App : 개발자가 만들어 놓은 기본적인 컴포넌트
  // App = 부모 컴포넌트
  // Ex01 = 자식 컴포넌트

// props : 속성값 전달(부모 컴포넌트가 자식 컴포넌트한테 데이터를 전달할 때 사용!)
const name = "승환";
const myColor = "red"; //-> Ex01 컴포넌트로전달!
  return (
    //<Ex01 name={name} ttt="123" myColor={myColor}></Ex01>
    // 사용자가만든 사용자 정의태그, name이라는 속성을 부여하고 name값을 부여함 -> 이값을 Ex01.js에 불러와 사용가능
    // 사용자정의태그 => 속성값을 임의로 정할 수 있음
    //<Ex02></Ex02>
    //<Ex03></Ex03>
    <Ex04></Ex04>
  );
}

export default App;