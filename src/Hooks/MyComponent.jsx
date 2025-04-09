//useEffect Hook : React Hook tells  react to do some code when component : Rerenders,Mount,state of a value.

//useEffect function(function,[Dependencies])
//1.useEffect(() =>{}) Runs after every rerender
//2.useEffect(()=>{},[]) Runs aftere mounting
//3.useEffext(( =>{},[value]) Runs afer mount and value changes.

//USES
// 1. Event listener 2. DOM Manipulation 3.Subscription 4.Fetching API 5.Component Unmounts.

import React,{useState,useEffect} from 'react';
export default function MyComponent()
{
 const [count,setCount] =useState(0);

 useEffect(()=>
{
    document.title=`Count:${count}`;
});

function addCount()
{
    setCount(c=>c+1);
}

function decCount()
{
    setCount(c=>c-1);
}
return(
    <div>
        <p>Count:{count}</p>
        <button onClick={addCount}>Add</button>

        <p>Count:{count}</p>
        <button onClick={decCount}>Decrement</button>
    </div>
)
}