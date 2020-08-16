import React from 'react';
import './App.scss';
import AppBody from './AppBody/AppBody';
import Drawer from './Drawer/Drawer';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AppBody />
      <Drawer />
    </div>
  );
}

export default App;
