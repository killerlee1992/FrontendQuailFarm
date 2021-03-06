import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateCage from "./components/cage-create.components";
import EditCage from "./components/edit-cage.components";
import CageList from "./components/cages-list.components";

import logo from "./logo.jpeg"

class App extends Component {
  render() {
    return (
      <Router>

     
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light  bg-light">
        <a className="navbar-brand" href="https://www.google.com/search?rlz=1C1CHBF_enUS854US856&sxsrf=ALeKk03FJigUk2zwCQjW0iKnD40J1oxr2w:1614990003511&q=Common+quail&stick=H4sIAAAAAAAAAONgFuLQz9U3MEuyMFTiBLEMywwMyrXss5Ot9JMy83Py0yv1M_PS8otyE3PiIQKZyUBmelF-aUFmXrpVUWpBUWpxal5JYklmWapCcUFqcmZq8SPGKm6Blz_uCUsVTlpz8hpjNhelJgqpcLG55pVkllQKSXHxSMFdrcEgxcUF51kxaTDxLGLlcc7Pzc3PUygsTczMmcDGCADhCzFb5wAAAA&sa=X" target="_blank">
          <img src={logo} width="30" height="30" alt="googleQuailTypes" />
        </a>
        <Link to="/" className="navbar-brand">Quail Cage App</Link>
        <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
              <Link to="/" className="nav-link">Cages list</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Create" className="nav-link">Create Cage</Link>
            </li>
          </ul>
        </div>

      </nav>


      <Route path="/" exact component={CageList}/>
      <Route path="/edit/:id" component={EditCage} />
      <Route path="/create" component={CreateCage}/>
      </div> 
  

      </Router>
    );
  }
}

export default App;
