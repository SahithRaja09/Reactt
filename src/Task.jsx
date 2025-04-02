import React from "react";

class Main extends React.Component {
    state = {
        tasks: ['task1', 'task2']
    }
    receiveData = (data) => {
        this.setState({ tasks: [...this.state.tasks, data] })
    }

    render() {
        return (
            <div>
                <Sub add={this.receiveData}> </Sub>
                <ul>
                    {
                        this.state.tasks.map((t,index) =>
                          (
                            <li key={index}>{t}</li>
                          )
                        )
                    }
                </ul>
            </div>
        )
    }
}

class Sub extends React.Component {
    state = {
        newTask:"",
    };
  handleInputChange= (e) =>
  {
    this.setState({newTask:e.target.value})
  };

  sendData = ()=>
  {
    this.props.add(this.state.newTask);
    this.setState({newTask:""});
  }
    render() {
        return (
            <div>
                <input type="text" value={this.state.newTask} onChange={this.handleInputChange} placeholder="Enter new Task"/>
                <button onClick={this.sendData}>Add to Task</button>
            </div>
        )
    }
}

class Task extends React.Component {
    render() {
        return (
            <Main>
            </Main>
        )
    }
}
export default Task;