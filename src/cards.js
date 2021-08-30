import React,{useReducer,useEffect} from "react";
import "./App.css";
import Card from './card'

const reducer = () => (console.log("object"))

const  Cards =  ({cards,onChangeInput,onDelete}) => {
  const [state, dispatch] = useReducer(reducer, cards[0])
  useEffect(() => {
    console.log(state)
    console.log(onDelete)
    console.log(onChangeInput)
  }, [])
  return (
    <div className = "cards">
      {cards.map(card => (
        <Card card={card} onDelete={onDelete}  onChangeInput={onChangeInput}/>
      ))}
    </div>
  );
};

export default Cards;