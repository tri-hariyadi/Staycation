import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/style.scss';

import LandingPage from 'pages/LandingPage';
import DetailPage from 'pages/DetailPage';
import Example from 'pages/Example';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} exact ></Route>
          <Route path="/properties/:id" component={DetailPage} exact ></Route>
          <Route path="/example" component={Example} exact ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
