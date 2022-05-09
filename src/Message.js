import React,{useState} from 'react';

import { useHistory } from 'react-router-dom';

const Message =({setUser,setText})=>{

    const history = useHistory();

    const [inputName, setInputName] = useState("");
    const [inputText, setInputText] = useState("");

    const onSubmit=(e)=> {
        e.preventDefault();

        setUser(inputName);
        setText(inputText);
        
        history.push('/ranking');
    }

    return(<>

    <form onSubmit={onSubmit}>
        <input placeholder='이름' value={inputName} onChange={(e)=> setInputName(e.target.value)}/>
        <input placeholder='한마디 적기' value={inputText} onChange={(e)=> setInputText(e.target.value)}/>
        <button type='submit'>제출</button>
    </form>
   
    </>);
}

export default Message;