    import { useEffect, useState } from "react";
function Apicall()
{

 const [users,setUsers]= useState([]);
//without useEffect the data re-renders infinite times. 

//  fetch("https://jsonplaceholder.typicode.com/users)
//  .then((res) => res.json())
// .then((data) =>setUsers(data));
useEffect(()=>
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
}, []);
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
export default Apicall;

