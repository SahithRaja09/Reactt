import React,{Component} from 'react';

class Main extends Component
{
    state={
        message:""
    }

    //im using a callback function to recieve data from child component.

    recievedata=(data) =>
    {
          this.setState({message:data});
    };

    render()
       {
        return(
            <div>
                <p>{this.state.message}</p>
           <Sub src={this.recievedata}></Sub>
            </div>
        )
       }
    
}

class Sub extends Component
{
    sendMessage= () =>
    {
        this.props.src("Hello this is from Child!");
    };
    render()
    {
        console.log("Child Properties", this.props);
        return(
            <div>
                <button onClick={this.sendMessage}>Send Message to Parent</button>
            </div>
        )
    }
}

class ChildParent extends Component {
    render() {
        return (
            <Main />
        );
    }
}
export default ChildParent;