import React, { Component } from 'react';
import './App.css';
import Output from "./Name/Name" ; 

class App extends Component {
  state = {
    outputs : [
      {name : 'Rishi', age: 44},
      {name: 'Poonam', age: 33},
      {name: 'Shiv', age: 33}
    ]
  }
  changeName = (newName) => {
    this.setState({
      outputs: [
        {name : 'tenin', age: 22},
        {name: 'topjor', age: 11},
        {name: newName, age: 11}
      ]
    });
  }
  nameChangeHandler = (event) => {
    this.setState({
      outputs: [
        {name : event.target.value, age: 22},
        {name: 'topjor', age: 11},
        {name: 'uo', age: 11}
        ]
    })
  }
  render() {
    return (
      <div className="output">
      <h1>This is my first react Project</h1>
      <input onChange={this.nameChangeHandler} placeholder={this.state.outputs[0].name}></input>
      <br/>
      <button onClick = {this.changeName.bind(this,'Rojirich')}>New name</button>
        <Output name="Karki" age="33" />
       <Output changed={this.nameChangeHandler} name={this.state.outputs[0].name} age={this.state.outputs[0].age} click={this.changeName.bind(this,'Ravishankar')}/>
       <Output name={this.state.outputs[1].name} age={this.state.outputs[1].age}/>
       <Output name={this.state.outputs[2].name} age={this.state.outputs[2].age}/>
      </div>
    );
  }
}

export default App;
