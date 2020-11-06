# React Router

## Using `react-router-dom`

```jsx
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home'
import About from './About'
import Header from './Header'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    );
}
export default App;
```
Nav Header
```jsx
import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/home">
                <div>Home</div>
            </Link>
            <Link to="/option">
                <div>About</div>
            </Link>
        </div>
    )
}

export default Header;

```