import React, { Component } from 'react';
import Child from './child';
import './App.css';


class App extends Component{
  
   state = {
      name: ' ',
      flag:  false,
      password: ''
    }
  
    onInputChange=(event: any) =>{
       this.setState({
          name: event.target.value

       })
    }
    onInput1Change=(event: any) =>{
      this.setState({
         password: event.target.value

      })
   }

  ChangeName=()=>{
    this.setState(
      {
        name:this.state.name,
        flag: true,
        password: this.state.password
       });

      
  };
  
  render(){
    if(this.state.flag)
     return (
        <Child {...this.state} /> 
     ) 
     else   return(
      <div>
             Name : <input type="text"    value={this.state.name} onChange={this.onInputChange}></input>
             Password : <input type="text" value={this.state.password} onChange={this.onInput1Change}></input>
            <button onClick={this.ChangeName}>Change State</button>
            <br></br>
           
      </div>
    )};

}


export default App;
