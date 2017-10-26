import React, { Component } from 'react';

class Content extends Component{
  render(){
    return(
          <div>
            <h3> Sirawich Lib </h3>
            <p>{this.props.title}</p>
            <p>{this.props.name}</p>
            <p>{this.props.Spell}</p>
          </div>
    );
  }
}
export default Content;
