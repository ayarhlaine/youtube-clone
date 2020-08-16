import React from 'react';
import './App.scss';
import SideBar from './SideBar/SideBar';
import AppBody from './AppBody/AppBody';

function App() {
  return (
    <div className="App">
      <div className="app_page">
        <SideBar />
        <AppBody />
      </div>
    </div>
  );
}

export default App;
