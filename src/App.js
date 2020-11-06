import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

import Page from './Page'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/React">
            <Page page="React"/>
          </Route>
          <Route path="/Python">
            <Page page="Python"/>
          </Route>
          <Route path="/">
            <Home />
            
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
