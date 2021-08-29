import './App.css';
import {useState, useEffect} from 'react'
import Card from "./card";
import faker from "faker";

function App() {
  const [name, setName] = useState("naber lan");
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
      console.log(json)
      setCards(json)
    })
        
    
  }, [])
  const chaneInput = (name) => setName(name.target.value);
  const setNewName = () =>
    setName(`${faker.name.firstName()} ${faker.name.lastName()}`);
  const btns = (
    <div>
      <button className="btnYes" onClick={setNewName}>
        Change Name
      </button>
    </div>)
  return (
    <div className="App">
      <button className="btnNo" onClick={showCardFun}>
        Show Card
      </button>
      {showCard ? (
        <Card btn = {btns} cards = {cards}   onChangeInput={chaneInput} />
      ) : null}
      {/* <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      >
        {btns}
      </Card> */}
    </div>
  );
}

export default App;
