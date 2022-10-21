import axios from 'axios'
import {useState} from 'react'
function Ex01(){
    const [movieArray, setMovieArray] = useState([]);
    async function getMovies(){
        const url ="http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";
        //axios 비동기 통신 방법으로 통신을 진행하겠습니다!
        const result = await axios.get(url);
        //async~ awiat 를 적지 않는다면 통신에 대한 응답값으로 Promise 타입이 반환되어진다
        // --> 화면을 구성하는 컴포넌트들이 요청을 보낼때 순차적으로 요청을 처리하기위함
        console.log(result.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
        //10개의 영화데이터 배열 -->reuslt.data.boxOfficeResult.dailyBoxOfficeList
        setMovieArray(result.data.boxOfficeResult.dailyBoxOfficeList)
    }
    return(
        <>
            <h1>영화데이터 확인페이지</h1>
            <button onClick ={getMovies}>영화정보가져오기</button>
            <table border="1">
                <tr>
                    <td>순위</td>
                    <td>제목</td>
                    <td>개봉일</td>
                </tr>
                {movieArray.map(function(movie){
                    return(
                        <tr>
                            <td>{movie.rank}</td>
                            <td>{movie.movieNm}</td>
                            <td>{movie.openDt}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
}
export default Ex01;