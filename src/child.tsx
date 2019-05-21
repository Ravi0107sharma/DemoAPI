import React, { Component } from 'react';
import { string } from 'prop-types';

interface Inameprops
{
    name: string,
    flag: boolean,
    password: string;
}
interface Istate 
 {
     person: string[],
     textval: string
}
  
class temp extends Component <Inameprops,Istate>  {
  
    constructor(props: any) {
        super(props);
        this.state = {
            person: [],
            textval:''};
      }
 
      render(){
          console.log(this.props.name +" " + this.props.password );
     if(this.props.name ===" Raj" && this.props.password ==="123")
     return(
         <div> Child render <br></br>
              {this.props.name} <br></br>
              {this.props.password} <br></br>
              {this.props.flag}
             <input type="text" value={this.state.textval} />
         </div>

     )
      else return(
            <div>
                Nothing to render
            </div>
     )

 }

 componentDidMount() {
    this.callApi();
  }

  

   getValue = (name: string, password: string) => {
        console.log(name + password)
    };
 
    callApi(){
       
        fetch('https://www.reddit.com/r/reactjs.json')
        .then((result) => {
          return result.json();
        }).then((jsonResult) => {
         this.setState({
            textval:jsonResult.data.children[0].data.selftext
          })
        })
     
    }
}

export default temp;