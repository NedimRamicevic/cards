import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Contact from './components/Contact'
import CardApp from './components/CardApp'
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profiles from './components/Profiles'
import ProtectedRoute from './components/ProtectedRoute'




function App() {

   return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute path="/cards"  component = {CardApp} />
        <ProtectedRoute path="/about" component = {About} />
        <ProtectedRoute path="/posts/:post_id" component = {Contact} />
        <ProtectedRoute path="/profile" component = {Profiles} />
        <Route path="*" component={()=>"404 NOT FOUND"} />
        </Switch >
    </div>
    </Router>
  );
}

export default App;
