import React from "react";
import "./App.css";
import Card from './card'



const  Cards =  ({cards,onChangeInput,onDelete}) => {
 
 
  return (
    <div className = "cards row row-cols-5">
      {cards.map(card => (
        <Card card={card} onDelete={onDelete}  onChangeInput={onChangeInput}/>
      ))}
    </div>
  );
};

export default Cards;