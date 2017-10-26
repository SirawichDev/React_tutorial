import React, { Component } from 'react';

class Header extends Component{
      constructor(){
      	super();
      	this.state = {
          name:"Unlike",
          count:0
        };
      }
  render(){
    setTimeout(()=>{
          this.setState({name:"Like"});
        },2000);
    setInterval(()=>{
      this.setState({count:this.state.count+1});
    },1000);
    return(
          <div>
            <h1> Hello ME </h1>
            <button>{this.state.name}</button>
            <h2>{this.state.count}</h2>
          </div>

    );
  }
}
export default Header;
