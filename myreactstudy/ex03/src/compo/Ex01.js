import {useEffect, useState} from 'react'

function Ex01() {
    const [data,setData] = useState(0);
    const [data1,setData1] = useState(0);
    //useEffect : 렌더링 되자마자 이거부터 실행 상태값이 바뀔때마다 다시 실행
    useEffect(function() {
        console.log("TEST")
    },[data]);

    function add() {
        setData(data + 1);
    };

    function add1() {
        setData1(data1 + 1);
    };

    function minus() {
        setData(data - 1);
    };

    function minus1() {
        setData1(data1 - 1);
    };

    return (
        <div>
            <h1>USEEFFECT 첫번째</h1>
            <button onClick={add}>+</button>
            <span>{data}</span>
            <button onClick={minus}>-</button>
            <br></br>
            <button onClick={add1}>+</button>
            <span>{data1}</span>
            <button onClick={minus1}>-</button>
        </div>
    )
}
export default Ex01;