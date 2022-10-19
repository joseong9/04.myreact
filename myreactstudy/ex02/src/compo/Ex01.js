import {useState} from 'react'

function Ex01(){

    //const array = ["눈", "바람", "비", "햇살"];
    const [array, setArray] = useState(["눈", "바람", "비", "햇살"])
    function deleteData(e) {
        //e.target.value;
        setArray(array.filter(function(data, index){
            return index != e.target.value;
        }));
    }

    return(
        <div>
            <ul>
                {array.map(function(data, index){
                    
                    return <li key={index}>{data}<button value={index} onClick={deleteData}>삭제</button></li>

                })}
            </ul>
        </div>
    )
}
export default Ex01;