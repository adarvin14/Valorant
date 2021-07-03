import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Albums from './components/Albums';
import AlbumForm from './components/AlbumForm';
import ErrorPage from './components/Error';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/' exact component={Contact} />
          <Route path="/about" component={ About } />
          <Route exact path="/albums" component={ Albums } />
          <Route exact path="/albums/new" component={ AlbumForm } />
          <Route exact path="/reviews" component={ Reviews } />
          <Route exact path="/reviews/new" component={ ReviewForm } />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;