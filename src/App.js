import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout'
import { Navigation } from './components/Navigation'
import { Jumbo } from './components/Jumbo'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Jumbo />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>

      </React.Fragment>
    )
  }
}




export default App;
