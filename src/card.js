import React,{useReducer,useState} from 'react'

const reducer = (state,action) =>{
    if (action.type === "inc") {
      return state + 1
    }
  }
const reducer1 = (state,name) =>{

    return {...state, name: "naber"}
}
const init = 0

const Card = ({card,onChangeInput,onDelete}) => {

    const [count, dispatch] = useReducer(reducer, init)
    const [state, dispatch1] = useReducer(reducer1, card)

    return (
      <div className="container">
          <div className="card col "style={{backgroundColor: "#eee"}} >
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
      <button onClick= {()=>dispatch1(card.name)}>dispatch</button>
      <button onClick={()=>dispatch({type : "inc", name: card.name})}>Reducer</button>
      <p>{count}</p>
    </div>
        </div>
        
      </div>
    )
}

export default Card
