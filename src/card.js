import React from "react";
import "./App.css";

function Card ({cards,onChangeInput,onDelete})  {
  
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
            defaultValue = {card.name}
          ></input>
          <p>{card.email}</p>
          <div className="btn">
      <button className="btnYes" onClick={() => onDelete(card.name)}>
        Delete
      </button>
    </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Card;