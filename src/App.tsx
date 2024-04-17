import React, { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { userProps } from './Types/UserSchema';
import Search from './Componentes/Search/Search';


function App() {

  return (
    <div>
        <h1>GitHub Finder</h1>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
