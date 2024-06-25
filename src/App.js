import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import React, { Component }  from 'react';
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Books from "./components/Books";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/education" exact component={Education} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/books" exact component={Books} />
          <Route path="/achievements" exact component={Achievements} />
          <Route path="/courses" exact component={Courses} />
          {/* <Route path="/contact" exact component={Contact} /> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
