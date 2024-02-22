import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import newPage from './newPage';

function App() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isTrueFalse, setIsTrueFalse] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    if(isTrueFalse) {
      navigate('/main');
    }
    console.log('isTrueFalse 감지완료')
  }, [isTrueFalse]);


  function isLogin() {
    const id = localStorage.getItem('id');
    const pwd = localStorage.getItem('pwd');
     
    if(userId === id && userPassword === pwd) {
      setIsTrueFalse(true);
      console.log("로그인 성공")
    }else {
      setIsTrueFalse(false);
      console.log("로그인 실패")
    }
  }

  function onChangeEvent(event, type) {
    switch(type) {
      case 'id':
        setUserId(event)
        break;
      case 'pwd':
        setUserPassword(event)
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <input onChange={(event) => {onChangeEvent(event.target.value, 'id')}}></input>
      <input onChange={(event) => {onChangeEvent(event.target.value, 'pwd')}} type="password"></input>
      <button onClick={(event) => {isLogin()}}>로그인</button>
      <Routes>
        <Route path="/main" Component={newPage}/>
      </Routes>
    </div>
  );
}

export default App;