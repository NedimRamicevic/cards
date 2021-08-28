import './App.css';
import {useState} from 'react'
import Card from "./card";
import faker from "faker";

function App() {
  const [name, setName] = useState("naber lan");
  const [showCard, setShowCard] = useState(true);
  const showCardFun = () => {
    setShowCard(!showCard);
    console.log("nabers", showCard);
  };
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
        <Card
          name={name}
          title={faker.name.jobTitle()}
          img={faker.image.avatar()}
          onChangeInput={chaneInput}
        >
          {btns}
        </Card>
      ) : null}
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      >
        {btns}
      </Card>
    </div>
  );
}

export default App;
