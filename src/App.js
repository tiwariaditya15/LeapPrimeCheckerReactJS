import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Leap from './components/Leap';
import Prime from './components/Prime';
import Nav from './components/Nav';
function App() {
  return (
    
    <Router>
    <div className="App">
        <Nav />
            <Switch>
              <Route exact path="/" component={Prime} />  
              <Route path="/Leap" component={Leap} />
              <Route path="/Prime" component={Prime} />
            </Switch>
    </div>
    </Router>
  );
}

export default App;
