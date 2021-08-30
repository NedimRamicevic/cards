import React,{useReducer} from 'react'

const reducer = (state,action) =>{
    if (action.type === "inc") {
      return state + 1
    }
  }
const init = 0
const Card = ({card,onChangeInput,onDelete}) => {
    const [count, dispatch] = useReducer(reducer, init)
 
    return (
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
      <button onClick={()=>dispatch({type : "inc", name: card.name})}>Reducer</button>
      <p>{count}</p>
    </div>
        </div>
      </div>
    )
}

export default Card
