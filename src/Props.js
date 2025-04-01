import React from 'react'

class  Props extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:props.count || 0
        }
    }
     add=() =>
    {
            this.setState((prevcount) =>({
                count:prevcount.count+1
            }))
    }
    remove= () =>
    {
        this.setState((prevcount)=>({
            count:prevcount.count-1
        }))
    }

    pause= () =>
    {
        this.setState((prevcount)=>({
            count:prevcount.count=0
        }))
    }
  render()
  {
    return (
        <div>
         <button  onClick={this.add}>Increment</button>
         <button  onClick={this.remove}>Decrement</button>
         <button  onClick={this.pause}>Pause</button>
         <p>count:{this.state.count}</p>
        </div>
      );
  }

}

export default Props
