import {useState} from 'react'
import React from 'react'

function Ex02(){
    
    // let [inputValue, setInputValue] = useState("");
    // const [todo, setTodo] = useState([{TodoList : ""}]);
    // let [newTodo, setNewTodo] = useState({name : inputValue});

    // const inputChg = (e) => {
    //     setInputValue(e.target.value);
    //     setNewTodo({name : inputValue});
    // };
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     setTodo([...todo, newTodo]);
    // };
    // const todosMap = todo.map((todoItem, value) => <p>{value}{todoItem.name}</p>)
    // return(
    //     <div className='todolist'>
    //         <form onSubmit={onSubmit}>
    //             <input placeholder='스페이스바 입력 후 추가' value={inputValue} onChange={inputChg}></input>
    //             <button>추가</button>
    //             <h1>TodoList</h1> {todosMap}
    //         </form>
    //     </div>
    // );

    const [todoArray, setTodoArray] = useState([]);
    const [inputData, setInputData] = useState("");

    function getText(e){
        setInputData(e.target.value);
    }

    function setTodo() {
        //todoArray에 inputData 추가
        //리액트에서 배열에 값을 추가할 때는 push가 아니라 concat을 사용한다
        //불변성 유지 : 상태값을 업데이트 할 때는 기존 상태를 그대로 두면서 새로운 값으로 성태를 업데이트
        setTodoArray(todoArray.concat(inputData))
    }

    function deleteData(e) {
        setTodoArray(todoArray.filter(function(data, index) {
            return index != e.target.value
        }));
    }

    return (
        <>
            <h1>TodoList</h1>
            <input placeholder='입력하세요' onChange={getText}></input>
            <button onClick={setTodo}>추가</button>
            {todoArray.map(function(data, index){
                return (
                    <div>
                        <h1>{data}</h1>
                        <li key = {index}><button value={index} onClick={deleteData}>삭제</button></li>
                    </div>)
            })}        
            
        </>
    )
}
export default Ex02;