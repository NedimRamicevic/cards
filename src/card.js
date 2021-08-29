import React from "react";
import "./App.css";

function Card ({cards,onChangeInput,btn})  {
  
  return (
    <div className = "cards">
      {cards.map(card => (
        <div className="card">
        <div className="container">
          <h4>
            <b>{card.name}</b>
          </h4>
          <input
            type="text"
            onChange={onChangeInput}
            value={card.name}
          ></input>
          <p>{card.email}</p>
          <p>{btn}</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Card;