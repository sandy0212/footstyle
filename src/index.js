import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory } from "react-router";
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Router history={browserHistory}>
      <Route
        path="/"
        component={App}
        url="http://101.53.137.41/api/?cat=Apparels&count=100&offset=1377;"
        crumb="not used"
      />
      </Router>,
  document.getElementById("root")
)