import {useState} from 'react'

function Ex03() {
    const [inputData, setInputData] = useState("");
    let data="";
    function getData(e){
        console.log(e.target.value);
        data = e.target.value;
        setInputData(e.target.value)
    }
    function chData(){
        setInputData(data);
    }
    return(
        <h1>
            <input onChange={getData}></input>
            <button onClick={chData}>상태값 바꾸기</button>
            <h1>{inputData}</h1>
        </h1>
    )
}

export default Ex03;