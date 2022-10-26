import { useSelector } from "react-redux";
import Item2 from "./Item2";


function Item1() {

    const name = useSelector((state)=>state.name);

    return (
        <div>
            <h1>Item1 : {name}</h1>
            <Item2></Item2>
        </div>
    )
}

export default Item1;