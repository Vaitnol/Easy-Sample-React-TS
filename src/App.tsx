import React, {useState, useEffect} from 'react';
import { BrowserRouter, Seitch, Route } from 'react-router-dom';
import {Navbar} from './components/navbar';

const App: React.FC = () => {

  return ( 
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact/>
          <Route component={AboutPage} path="/about"/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
