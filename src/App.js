import React from 'react';
import Index from './Agency/Agency'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

import './App.css';
// import WellDone from './components/WellDone';
import Sauti from './Agency/components/Projects/SautiSummary'

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Index}/>
    {/* <Route path="/project/welldone" component={WellDone}/> */}
    <Route path="/project/sauti" component={Sauti}/>
  </Switch>
  </Router>
  );
}

export default App;
