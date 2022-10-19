function Ex01(){

    const array = ["눈", "바람", "비", "햇살"];

    return(
        <div>
            <ul>
                {array.map(function(data, index){
                    
                    return <li key={index}>{data}</li>
                    
                })}
            </ul>
        </div>
    )
}
export default Ex01;