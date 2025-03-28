import React from 'react'

class Classcomponent extends React.Component {
    constructor()
    {
        super();
        this.state={
            count:0
        }
    }
    add = () =>
    {
      this.setState({
        count:this.state.count+1
      });
    };
    remove = () =>
    {
        this.setState({
            count:this.state.count-1
        });
    };
    reset= () =>
    {
        this.setState({
            count:0
        });
    };

    //component mouting im doing for adding eventListeners....

    componentDidMount() {
        document.querySelector('.inc').addEventListener('click', this.add);
        document.querySelector('.dec').addEventListener('click', this.remove);
        document.querySelector('.reset').addEventListener('click', this.reset);
    }
    componentWillUnmount() {
        document.querySelector('.inc').removeEventListener('click', this.add);
        document.querySelector('.dec').removeEventListener('click', this.remove);
        document.querySelector('.reset').removeEventListener('click', this.reset);
    }
    render()
   {
    return(
       <div>
        {/* <button className="inc" onClick={this.add}>Increment</button>
        <button className="dec" onClick={this.remove}>Decrement</button>
        <button className="Reset" onClick={this.reset}>Reset</button>
        <span className="current">Count: {this.state.count}</span> */ 
        }
        <button className="inc" >Increment</button>
        <button className="dec" >Decrement</button>
        <button className="reset" >Reset</button>
        <span className="current">Count: {this.state.count}</span>
       </div>
    );
   };
}

export default Classcomponent
