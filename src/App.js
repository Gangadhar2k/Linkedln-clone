import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Wiget from './Components/Wiget';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Components/Auth/Login';

function App() {

  const user = useSelector(selectUser);
  return (
  <div className="app">
  <Header/>
  {!user ? (
    <Login/>
  ):(

    <div className="app__body">
      <Sidebar/>
      <Feed/>
     <Wiget/>
    </div>
  )
}
  {/* App Body */}
    

  </div>
  );
}

export default App;
