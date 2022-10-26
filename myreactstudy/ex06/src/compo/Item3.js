import {useSelector} from 'react-redux';
//useSelector는 공유되는 store에 접근해서 state 값을 가져올 수 있는 역할
function Item3() {
    
    const number = useSelector((state)=>state.number);

    return (
        <div>
            <h1>Item3 : {number}</h1>
        </div>
    )
}

export default Item3;