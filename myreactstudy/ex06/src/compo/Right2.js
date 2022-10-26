import {useDispatch} from 'react-redux'
//store에 연결된 reducer를 실행

function Right2() {
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right2</h1>
            <button onClick={()=>dispatch ({
                type: 'plus'
            })}>+</button>
        </div>
    )
}

export default Right2;