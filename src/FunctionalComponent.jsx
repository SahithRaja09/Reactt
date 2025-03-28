import React,{useState} from 'react'

function FunctionalComponent() {
     const [count,setCount]= useState(0);
     const add = () =>
     {
        setCount(count + 1);
     }
     const remove = () =>
     {
        setCount(count-1);
     }
     const pause = () =>
     {
        setCount(count);
     }
  return (
    <div>
      <button className="inc" onClick={()=>add()}>Increment</button>
      <button className="dec" onClick={()=>remove()}>Decrement</button>
     <button className="reset" onClick={()=>pause()}>Reset</button>
    </div>
  )
}

export default FunctionalComponent
