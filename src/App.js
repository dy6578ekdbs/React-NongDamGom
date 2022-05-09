import './App.css';
import React, {useState} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';

import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';
import Message from './Message';
import Ranking from './Ranking';

function App() {
  
  const [score,setScore] = useState(0);
  const [user,setUser] = useState("");
  const [text,setText] = useState("");

  const [userList,setUserList] = useState([
  
  ]);

  return (
    <div className="App">
      <Switch>
      <Route path="/" exact  component={Start} />

      <Route 
      path="/quiz" 
      render={()=> <Quiz setScore={setScore}/>}/>

      <Route path="/score" 
      render={() => <Score score={score}/>}/>

      <Route path="/message" 
       render={() => <Message setUser={setUser} setText={setText}/>}/>

      <Route path="/ranking" 
       render={() => <Ranking 
       userList={userList}
       setUserList={setUserList} 
       user={user}
       text={text}
       score={score}/>}/>

      </Switch>
        
    </div>
  );
}

export default withRouter(App);
