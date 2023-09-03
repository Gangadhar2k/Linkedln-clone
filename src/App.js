import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Wiget from './Components/Wiget';

function App() {
  return (
  <div className="app">

  <Header/>

    <div className="app__body">
      <Sidebar/>
      <Feed/>
     <Wiget/>
    </div>
  {/* App Body */}
    

  </div>
  );
}

export default App;
