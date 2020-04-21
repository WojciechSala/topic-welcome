import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" component={FAQ} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
