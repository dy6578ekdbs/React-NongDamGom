import React from 'react';
import {Link} from 'react-router-dom';

const Score =({score})=>{

    return(<>   
    <div>                
      
    <h1>name 퀴즈에 대한 내 점수는?</h1>  
    <div>
        <span>{score}</span>점   
        <p>이정도면 찐친!</p>
    </div>
    <Link to="/message"><button>랭킹보기</button></Link>
</div>
    
    </>);
}

export default Score;