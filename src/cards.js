import React from "react";
import "./App.css";
import Card from './card'


function Cards ({cards,onChangeInput,onDelete})  {
  
 
  return (
    <div className = "cards">
      {cards.map(card => (
        <Card card={card} onDelete={onDelete}  onChangeInput={onChangeInput}/>
      ))}
    </div>
  );
};

export default Cards;