import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {AppHeader } from './cmps/AppHeader'
import { CarApp } from './pages/CarApp'
import { CarDetails } from './pages/CarDetails'
import { CarEdit } from './pages/CarEdit'
import './assets/main.css'

function App() {
  return (
    <div className="content-wrapper">
      <AppHeader/>
      <Switch>
        <Route path="/car/edit/:id?" component={ CarEdit } />
        <Route path="/car/:id" component={ CarDetails } />
        <Route path="/" component={ CarApp } />
      </Switch>
    </div>
  );
}

export default App;
