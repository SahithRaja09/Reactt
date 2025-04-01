//this is about props drilling
//props drilling is a situation in which the data has to pass for multiple levels in a component tree, even when those intermediate components dont need them.

import React from "react";
// import { Link } from "react-router-dom";


const GreatGrandchild = ({message}) => 
    {
      return <p>{message}</p>
    }

   const Grandchild = ({message}) => 
        {
          return <GreatGrandchild message={message} />
        }

      const  Child = ({message}) =>
        {
            return <Grandchild message={message} />
        }
      const  Parent = () =>
        {
            const message="Hello From Parent"
            return <Child message={message}/>
        }

export default Parent;