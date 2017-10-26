import React, { Component } from 'react';
import Footer from './Footer'; //import ไฟล์ฺ Footer.js มา ให้มีชื่อว่า Footer
import Header from './Header';
import Content from './Content';
import Butt from './Button';


//สร้าง Component = JSX
class App extends Component {
  render(){
    var relativess= {
      left: 100,
     top: 150,
}
    return(

          <div style={relativess}>d
            <Header/>
            <Content/>
            <Footer/>
            <Butt/>
          </div>


    );
  }
}

export default App;
