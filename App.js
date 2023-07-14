import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import { dogsData } from './dogsData';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav dogs={dogsData} />
          <Switch>
            <Route exact path="/dogs">
              <DogList dogs={dogsData} />
            </Route>
            <Route path="/dogs/:name">
              <DogDetails dogs={dogsData} />
            </Route>
            <Redirect to="/dogs" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;






