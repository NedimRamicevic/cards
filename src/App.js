import './App.css';
import {useState, useEffect, useReducer} from 'react'
import Cards from "./cards";
import faker from "faker";




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
    <div className="App">
      <button className="btnNo" onClick={showCardFun}>
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
  );
}

export default App;
