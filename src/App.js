import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" render={(props) => <News {...props} key="general" pageSize={5} country="in" category="general" />} />
            <Route exact path="/business" render={(props) => <News {...props} key="business" pageSize={5} country="in" category="business" />} />
            <Route exact path="/entertainment" render={(props) => <News {...props} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route exact path="/general" render={(props) => <News {...props} key="general" pageSize={5} country="in" category="general" />} />
            <Route exact path="/health" render={(props) => <News {...props} key="health" pageSize={5} country="in" category="health" />} />
            <Route exact path="/science" render={(props) => <News {...props} key="science" pageSize={5} country="in" category="science" />} />
            <Route exact path="/sports" render={(props) => <News {...props} key="sports" pageSize={5} country="in" category="sports" />} />
            <Route exact path="/technology" render={(props) => <News {...props} key="technology" pageSize={5} country="in" category="technology" />} />
          </Switch>
        </Router>
      </div>
    )
  }
}
