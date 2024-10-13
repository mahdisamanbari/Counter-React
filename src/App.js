import React, { useState } from 'react';

const App = () => {
  const [count,setCount]=useState(0)
  const increment = ()=>{
    setCount(count + 1)
  }
  const decrement = ()=>{
    setCount(count - 1)
  }
  

  return (
    <div className='app'>
           <button onClick={()=>increment()} className='btn'>+</button>
           <button onClick={()=>decrement()}  className='btn'>-</button>
           <h2 className='counter-text'>{count}</h2>
    </div>
  );
};

export default App;