import React from 'react'
import {useState, useEffect} from 'react'
import Cards from "../cards"


const CardApp = () => {

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
        <div className="container">
            <button className="btnNo" onClick={showCardFun}>
        Show Card
      </button>
      {showCard ? (
        <Cards cards = {cards} onDelete={onDelete}  onChangeInput={chaneInput} />
      ) : null}
        </div>
    )
}

export default CardApp
