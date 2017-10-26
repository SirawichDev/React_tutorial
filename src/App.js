import React, { Component } from 'react';
import Footer from './Footer'; //import ไฟล์ฺ Footer.js มา ให้มีชื่อว่า Footer
import Header from './Header';
import Content from './Content';
import Butt from './Button';
import Love from './Click';

//สร้าง Component = JSX
class App extends Component {
      constructor(){
        super();
        this.state ={
          data:[],
          message:"UnLike",
          Type:""
        };
        this.changeMessage = this.changeMessage.bind(this);
        this.InsetData = this.InsetData.bind(this);
      }

      changeMessage(){
        this.setState({message:"Like"});
      }
      InsetData(){
        var item="Clicked,";
        var myArray = this.state.data;

        myArray.push(item);
        this.setState({data:myArray})

      }
  render(){
    var relativess= {
      left: 100,
     top: 150,
}
    return(

          <div style={relativess}>
            <Header/>
            <Content title="หัวข้อ" name="Sirawich Voungchuy" Spell="Sawasdee"/>
            <Footer/>

            <button onClick={this.changeMessage}>{this.state.message}</button>
  <br></br>
            <button onClick={this.InsetData}>Insert</button>

            <h1>{this.state.data}</h1>
            <Butt/>
            <Love/>
          </div>


    );
  }
}

export default App;
