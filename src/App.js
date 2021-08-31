import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Contact from './components/Contact'
import CardApp from './components/CardApp'
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home';




function App() {

   return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/home" component={Home} />
        <Route path="/cards"  component = {CardApp} />
        <Route path="/about" component = {About} />
        <Route path="/posts/:post_id" component = {Contact} />
    </div>
    </Router>
  );
}

export default App;
