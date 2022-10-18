function Ex01(props){   //props라는 매개변수로 받아주면 부모컴포넌트에서 넘김 데이터를 전부 가져올 수 있다
    return(
        <>
        <h1 style={{color:props.myColor}}>첫번째 컴포</h1>
        <h1>저의 이름은 {props.name}</h1>
        <h1>저의 키는 {props.ttt} 입니다.</h1>
        </>
    )
}
export default Ex01;