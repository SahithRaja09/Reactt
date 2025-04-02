import React from "react";
class Parent extends React.Component
{
    state={
        name:"Sahith"
    }
    recievedata = (data) =>
    {
             this.setState({name:data});
    }
    render()
    {
        return(
       <>
           <Child name={this.state.name} src={this.recievedata}></Child>
           <p>Message from Child: {this.state.data}</p>
       </>
        )
    }
}

class Child extends React.Component
{
 sendMessage=() =>
 {
    this.props.src(`${this.props.name} has confirmed!!`)
 }
    render()
    {
        return(
            <div>
            <h3>Hello, {this.props.name}!</h3>
            <button onClick={this.sendMessage}>Confirm</button>
            </div>
        )
    }
}

class Props2 extends React.Component
{

    render()
    {
        return (
            <Parent></Parent>
        )
    }
}

export default Props2;