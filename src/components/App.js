import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageTemplate from './template/PageTemplate'
import Error404 from './common/Error404';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import './App.scss';

const App = () => 
  <PageTemplate>
    <Switch>
      <Route exact={true} path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contacts' component={Contacts}/>
      <Route component={Error404}/>
    </Switch>
  </PageTemplate>

export default App;