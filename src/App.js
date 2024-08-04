import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <News key="general" category="general" />} />
        <Route path="/business" render={() => <News key="business" category="business" />} />
        <Route path="/entertainment" render={() => <News key="entertainment" category="entertainment" />} />
        <Route path="/general" render={() => <News key="general" category="general" />} />
        <Route path="/health" render={() => <News key="health" category="health" />} />
        <Route path="/science" render={() => <News key="science" category="science" />} />
        <Route path="/sports" render={() => <News key="sports" category="sports" />} />
        <Route path="/technology" render={() => <News key="technology" category="technology" />} />
      </Switch>
    </Router>
  );
}

export default App;
