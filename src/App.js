import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import GetPage from './Pages/GetPage';
import './App.css';

function App() {
  return (
    <Router>
          
      <Switch>
        <Route exact path="/" component={GetPage}
        />
      </Switch>
    </Router>
  );
}

export default App;
