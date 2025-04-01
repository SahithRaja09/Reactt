//this methods helps to avoid props drilling there by only data is passed for required components.
//using createcontext, MessageContent provider and consumer we can pass the data.

import React,{createContext} from "react";

const MessageContext=createContext();

class GreatGrandChild extends React.Component
{
    render()
    {
        return(
            <div>
               <MessageContext.Consumer>
          {(message) => (
            <p>{message}</p>
          )}
        </MessageContext.Consumer>
      </div>
    );
    }
}

class GrandChild extends React.Component
{
    render()
    {
        return(
            <div>
            <MessageContext.Consumer>
            {(message) => (
              <p> {message}</p>
            )}
          </MessageContext.Consumer>
              <GreatGrandChild />
            </div>
          
        )
    }
}
class Child extends React.Component
{
    render()
    {
        return(
            <GrandChild />
        )
    }
}

class Parent extends React.Component
{
    render()
    {
           const message= "hello this is message is from parent";
        return(
         
            <MessageContext.Provider value={message}>
                <Child />
            </MessageContext.Provider>
        );
    }
}
export default Parent;