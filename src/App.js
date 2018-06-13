import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      result: []
    };
  }
  boysShoes = () => {
    console.log("first click working");
    fetch('http://101.53.137.41/api/?cat=Footwear_Accessories_Sprays&count=100&offset=0;')
    .then(accessories=>accessories.json())
    .then(response=>{
      let kidaccess=response
      this.setState({
        result : kidaccess
      });
      console.log(this.state.result);
    })
  };
  render() {
    return (
      <div>
        <button onClick={this.boysShoes}> Kids Shoes</button>
          
        </div>
    );
  }
}
export default App;