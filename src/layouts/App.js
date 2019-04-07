import React, { Component } from "react";
import "../styles/App.css";
import Navigation from "./Navigation.js";
import Page from "./Page.js";
import Header from "./Header.js";
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,

} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <main>
            <div className="container-fluid">
              <div className="row">
                <Navigation />
                <section role="main" className="page col-sm-8 ml-sm-auto col-lg-10 px-4 col-xs-12">
                  <Page />
                </section>
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
