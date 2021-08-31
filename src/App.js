import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Cards from "./cards";
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'




function App() {
  const [cards, setCards] = useState([])
  const [showCard, setShowCard] = useState(true);
  const showCardFun = () => {
    setShowCard(!showCard);
    console.log("nabers", showCard);
  };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(json => {
      setCards(json)
    })
  }, [])
  


  const chaneInput = ({target}) => {
    console.log("nabers")
    var temp = cards
    for (const card in temp) {
      if (Object.hasOwnProperty.call(temp, card)) {
        const element = temp[card];
        if (element.name === target.defaultValue) {
          element.name = target.value
        }
      }
    }
    setCards([...temp])
  }


  const onDelete = (name) =>{
    console.log(name)
    setCards(prev =>(
      prev.filter(x => x.name !== name)
    ))
  }

 
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/"  component = {Home} />
        <Route path="/about" component = {About} />
        <Route path="/contact" component = {Contact} />
      {/* <button className="btnNo" onClick={showCardFun}>
        Show Card
      </button>
      {showCard ? (
        <Cards cards = {cards} onDelete={onDelete}  onChangeInput={chaneInput} />
      ) : null}
      {/* <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      >
        {btns}
      </Card> */}
    </div>
    </Router>
  );
}

export default App;
