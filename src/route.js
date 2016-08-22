import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import App from './components/app/app.js'
import Home from './components/home/home.js'
// import Pages from './container/Pages.js'
import {
  Pages,
  ShowPage,
  NewPage
} from './container'

export default () => {
  return (
   <Router history={browserHistory}>
     <Route path='/'
            component={App}>
       <IndexRoute component={Home} />
       <route path='pages'>
         <IndexRoute component={Pages} />
         <route path=':id' component={ShowPage} />
       </route>
     </Route>
   </Router>
  )
}
