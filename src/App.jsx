import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import TeamSelection from './TeamSelection';
import TeamPage from './TeamPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/team-selection" component={TeamSelection} />
        <Route path="/team/:teamId" component={TeamPage} />
      </Switch>
    </Router>
  );
}

export default App;
