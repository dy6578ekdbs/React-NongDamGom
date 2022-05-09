import React,{useState,useEffect} from 'react';

const Ranking =({
    userList,
    setUserList,
    user,
    text,
    score,
})=>{

    useEffect(()=>{
        setUserList([...userList,{
                name:user,
                text:text,
                score:score}]);

                console.log(userList);
    },[]);
    
  

    return(<>

        <h1>내 결과</h1>

        {userList.map(user => {
            return(<div>
            <span>{user.name}</span>
            <span>{user.score}</span>
            <span>{user.text}</span>
            </div>);
        })}
    
    </>);
}

export default Ranking;