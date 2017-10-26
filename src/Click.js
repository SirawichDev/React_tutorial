import React, {Component} from 'react';

class Click extends Component {
  constructor() {
    super();
    this.state = {
      getdata: [],
      count: 0
    }
    this.GetLove = this.GetLove.bind(this);
  }
  GetLove() {
    var love_it = "Love";
    var Arr = this.state.getdata;
    Arr.push(love_it);
    this.setState({getdata: Arr});
  var i =0;
      this.setState({count: i});
    i++;
  }
  render() {
    return (
      <div>
        <button onClick={this.GetLove}>LoveMe</button>
        <h1>{this.state.getdata}</h1>
        <h1>{this.state.count}</h1>
        <p>
          Create By Sirawich
        </p>
      </div>

    );

  }
}
export default Click;
