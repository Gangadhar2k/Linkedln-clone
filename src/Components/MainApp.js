import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Wigets from './Wiget';
import './MainApp.css'

function MainApp() {
  return (
    <div>
      <Sidebar />
      <Feed />
      <Wigets />
    </div>
  );
}

export default MainApp;
