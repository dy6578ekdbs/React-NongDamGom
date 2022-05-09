import React,{useState} from 'react';
import img from "./img/nongdam.jpg";
import TinderCard from "react-tinder-card";

import { useHistory } from 'react-router-dom';
let score = 0;

const Quiz =({setScore})=>{
    const history = useHistory();

    const [num, setNum] = useState(0);
    

    const [list, setList] = useState([
        {q:"농담곰은 토끼다", a:"right",idx:0},
        {q:"농담곰은 귀엽다", a:"left",idx:1},
        {q:"농담곰은 바보다", a:"left",idx:2},
        {q:"농담곰은 바보다", a:"left",idx:3},
        {q:"농담곰은 바보다", a:"left",idx:4},
      ]);
      
    const onSwipe = (direction) => {
        console.log(direction);
    
        if(num === 4){
            if(direction === list[num].a){
                score = score + 20;
                console.log("점수증가",score);
            }
    
            setScore(score);
           history.push('/score');

         }else{

            if(direction === list[num].a){
                score = score + 20;
                console.log("점수증가",score);
            }
    
            setNum(num+1);

         }
       
    }

    return(<>

       
    <p>{num+1}번 문제</p>

    {list.map(quiz => {
        if(num === quiz.idx){
               return( 
               <>
            <TinderCard onSwipe={(e)=>onSwipe(e)}>
                <img src={img} key={quiz.idx} height="100px" />
            </TinderCard>
               
               <h1 key={quiz.idx}>{quiz.q}</h1>
               </>
               )
        }
     
    })}

      


    
    </>);
}

export default Quiz;