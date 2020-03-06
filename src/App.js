import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import HomePage from './components/homepage';
import CountPage from './components/countpage';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
          exact
          path='/'
          component={HomePage}/>
          <Route
          exact
          path='/counter'
          component={CountPage}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
