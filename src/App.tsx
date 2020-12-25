import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { TicTacToe } from './pages/TicTacToe';
import { TodosPage } from './pages/TodoPage';


const App: React.FC = () => {
  
  return(
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={HomePage} path="/" exact /> 
          <Route component={TodosPage} path="/todos"  />
          <Route component={TicTacToe} path="/tictactoe"  />  
        </Switch>
      </div>
    </BrowserRouter>);
}

export default App;
//ddd