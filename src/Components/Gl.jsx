import React,{useReducer, useState} from 'react'





const reducer=(state,action)=>{

  switch(action.type)
  {
    case 'popular':
      return {count:state.count+1};
    case 'upcoming':
      return {count:state.count-1};
    case 'airing':
      return {count:state.count+9};
    default:
      throw new Error('Unknown action');  
  }
}

function Gl() {
  const initialState = { count: 0 };
  const [count,setCount]=useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>Global</h1>
        <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'popular' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'upcoming' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'airing' })}>Reset</button>
        <br></br>
        <br></br>  
          <p>count by state:{count}</p>
          <button onClick={() => setCount(count+1)}>Increment</button>
          <button onClick={() => setCount(count-1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Gl