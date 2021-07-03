import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact'
import Footer from './components/Footer';
import ErrorPage from './components/Error';
import About from './components/About'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/' exact component={Contact} />
          <Route path="/about" component={ About } />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;