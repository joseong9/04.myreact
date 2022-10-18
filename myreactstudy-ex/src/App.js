import logo from './logo.svg';
import './App.css';
import './test.css';
import App2 from './App2';
import Ex01 from './compo/Ex01';
import Ex02 from './compo/Ex02';

function App() {
  const data = "첫번째 컴포";
  const name = "승환";
  //const name1 = "영표";
  //JSX 문법 -> Javascript 와 HTML을 같이 사용할 수 있는 문법
  //규칙 1 : html 구조는 한가지 태그로 묶여있어야 한다
  //규칙 2 : 모든 태그는 여는 태그와 닫는 태그가 존재해야 한다
  //규칙 3 : JSX 문법 안에서는 사용할 수 있는 Javascript 문법이 제한되어 있다 (삼항 연산자는 가능)
  //규칙 4 : class지정할 때 className 이라는 키워드 사용
  //빈태그(Fragment) 로도 묶어서 사용 가능
  //return 안에 사용자 정의 태그 구조를 작성할 수 있다
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <h1>
      <h1 className='first'>HELLO REACT</h1>
      <h1 style={{color:'red'}} id="test">오늘도 파이팅!</h1>
      {/* 주석처리 ctrl/ */}
      <h1>나의 이름은 {name == '승환' ? name: "영표"}</h1>
      <h1>{data == 'ex01' ? <Ex01></Ex01> : <Ex02></Ex02>}</h1>
      <App2></App2>
      <Ex01></Ex01>
      <Ex02></Ex02>
    </h1>
  );
}

// 위에서 만들어 놓은 사용자 정의 태그를 보냄
export default App;
