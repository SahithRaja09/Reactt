import {useState} from 'react';

export default function UseState()
{
   const [name,setName]= useState("Guest");
   const [age,setAge] =useState(0);
   const [isEmployed,setIsEmployed] =useState(false);
   const updateName =() =>
   {
    setName("Ram");
   }

   const updateAge =() =>
   {
    setAge(age+1);
   }

   const updateEmployment = () =>
   {
    setIsEmployed(!isEmployed);
   }
   return (
    <div>
        <p>Name:{name}</p>
    <button onClick={updateName}>SetName</button>

    <p>Age:{age}</p>
    <button onClick={updateAge}>Increment Age</button>

    <p>Employee:{isEmployed? "yes":"no"}</p>
    <button onClick={updateEmployment}>Status</button>
    </div> 
   )
}

