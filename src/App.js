import React from 'react';
import './App.scss';
import SideBar from './SideBar/SideBar';
import AppBody from './AppBody/AppBody';
import Drawer from './Drawer/Drawer';

function App() {
  return (
    <div className="App">
      <div className="app_page">
        <SideBar />
        <AppBody />
      </div>
      <Drawer />
    </div>
  );
}

export default App;
