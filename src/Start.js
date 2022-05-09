import React from 'react';
import img from "./img/nongdam.jpg";
import {Link} from "react-router-dom";

const Start =({name,})=>{

    return(<>
    <img src={img}/>
    <h1>나는 농담곰에 대해 얼마나 알고 있을까?</h1>
    <form>
        <imput tyoe="text" placeholder="이름" />
        <Link to="/quiz">시작하기</Link>
    </form>
    
    </>);
}

export default Start;