import React from "react";
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Home from './Home';
import Beschikbaarheid from './Beschikbaarheid';
import Rooster from './Rooster';
import Verlof from './Verlof';
import Account from './Account';
import Groepsrooster from './Groepsrooster';
import './index.css';
//import { CookiesProvider } from 'react-cookie';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const routing = (
    <Router>
    <Route exact path="/" component={App} />
      <Route path="/Home" component={Home} />
      <Route path="/Beschikbaarheid" component={Beschikbaarheid} />
      <Route path="/Rooster" component={Rooster} />
      <Route path="/Groepsrooster" component={Groepsrooster} />
      <Route path="/Verlof" component={Verlof} />
      <Route path="/Account" component={Account} />
    {/*<div>
      <Route exact path="/" component={App} />
      <Route path="/Home" component={Home} />
      <Route path="/Beschikbaarheid" component={Beschikbaarheid} />
      <Route path="/Rooster" component={Rooster} />
      <Route path="/Groepsrooster" component={Groepsrooster} />
      <Route path="/Verlof" component={Verlof} />
      <Route path="/Account" component={Account} />
    </div>*/}
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'))