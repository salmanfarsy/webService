
import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {Switch, Route} from 'react-router-dom'
import { Homepage } from './pages/homepage';
import { NotFound } from './pages/notFound';
import { Contact } from './pages/contact';
import { About } from './pages/about';
import { Services } from './pages/services';
import services from './data';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = services;
    }
  
  render() {

    return (
      <div>
        <Header/>
      <Switch>
      <Route exact path='/'>
      <Homepage services = {this.state}/>
        </Route>
      <Route exact path='/about'>
      <About/>
        </Route>
        <Route exact path='/services'>
      <Services services = {this.state}/>
        </Route>
     
        <Route exact path='/contact'>
      <Contact/>
        </Route>
      
        <Route>
      <NotFound path='*'/>
        </Route>
      </Switch>
        <Footer/>
      </div>
    )
  }
}




