import React, { Component } from 'react';
import './mainPage.css'
import Button from './Components/Button'
import InputButton from './Components/InputButton'


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      decimalInput: ''
     }
  }

  handleChange = event => {
    this.setState({
      decimalInput: event.target.value
    })
  }

  convertToBinary = decVal => {
    if(decVal.length > 0){
    let binaryVal = "";
    let currentDecVal = parseInt(decVal);
      while(true){
        binaryVal = (currentDecVal % 2).toString() + binaryVal;
        currentDecVal = Math.floor(currentDecVal / 2)
        if(currentDecVal === 0){
          break;
      }
    }
    return binaryVal;
  }
  return "0";
  }

  convertToDecimal = binVal => {

  }


  render() { 
    console.log(this.state.decimalInput);
    console.log(Math.floor(49 / 2));
    console.log(this.convertToBinary("20"));
    return ( 
      <div className="main">
        <div className="header">DECIMAL TO BINARY/BINARY TO DECIMAL CONVERTER</div>
        <div className="conversionType">
          <div>Conversion Type:</div>
          <div className="changeButton"><Button /></div>
          </div>
        <div className="inputs">
          <div>DECIMAL</div>
          <InputButton value={this.state.decimalInput} onChange={this.handleChange}/>
          <div>In Binary is...</div>
          <div>{this.convertToBinary(this.state.decimalInput)}</div>
        </div>
        
      </div>
     );
  }
}
 
export default MainPage;