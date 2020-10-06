import React from 'react';
import Index from './Agency/Agency'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

import './App.css';
import Sauti from './Agency/components/Projects/SautiSummary'
import Well from './Agency/components/Projects/WellSummary'

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Index}/>
    <Route path="/project/sauti" component={Sauti}/>
    <Route path="/project/welldone" component={Well}/>
  </Switch>
  </Router>
  );
}

export default App;
