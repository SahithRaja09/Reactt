import React from 'react'

class  Props extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:this.props.count=0
        }
    }
     add=() =>
    {
            this.props.count({
                count:this.count+=1
            })
    }
    remove= () =>
    {
        this.props.count({
            count:this.count-=1
        })
    }

    pause= () =>
    {
        this.props.count({
            count:this.count=0
        })
    }
  render()
  {
    return (
        <div>
         <button variant="text" color="primary" onClick={this.add}>Increment</button>
         <button variant="text" color="primary" onClick={this.remove}>Decrement</button>
         <button variant="text" color="primary" onClick={this.pause}>Pause</button>
         <p>count:{this.state.count}</p>
        </div>
      );
  }
}

export default Props
