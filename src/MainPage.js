import React, { Component } from "react";
import "./mainPage.css";
import Button from "./Components/Button";
import InputButton from "./Components/InputButton";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: "Decimal",
      input: "",
      outputType: "Binary"
    };
    this.conversionType="decToBin"
  }

  handleInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleInputTypeChange = event => {
    this.setState({
      inputType: event.target.value,
      input: ""
    });
    this.changeConversionType();
  }

  handleOutputTypeChange = event => {
    this.setState({
      outputType: event.target.value
    });
    console.log("event.target.value: " + event.target.value);

    this.changeConversionType();
  }

  changeConversionType = () => {
    let newInput = "";
    let newOutput = "";
    if(this.state.inputType==="Decimal"){
      newInput = "dec";
    } else if(this.state.inputType==="Binary"){
      newInput="bin";
    } else {
      newInput="hex"
    }

    if(this.state.outputType==="Decimal"){
      newOutput = "Dec";
    } else if(this.state.outputType==="Binary"){
      newOutput="Bin";
    } else {
      newOutput="Hex"
    }

    this.conversionType = newInput + "To" + newOutput;
  }


  renderOutputSection = outputType => {
    switch(this.conversionType) {
      case "decToBin":
        return this.convertToBinary(this.state.input);
      case "decToHex":
        // code block
        break;
      case "binToDec":

      break;
      case "binToHex":

      break;

      case "hexToDec":

      break;

      case "hexToBin":

      break;

      default:
        // code block
    }
    

  }

  convertToBinary = decVal => {
    if (decVal.length > 0 && isNaN(parseInt(decVal)) === false) {
      let binaryVal = "";
      let currentDecVal = parseInt(decVal);
      while (true) {
        binaryVal = (currentDecVal % 2).toString() + binaryVal;
        currentDecVal = Math.floor(currentDecVal / 2);
        if (currentDecVal === 0) {
          break;
        }
      }
      return binaryVal;
    }
    return "0";
  };

  convertToDecimal = binVal => {};

  render() {
    console.log(this.state.input);
    console.log("input type: " + this.state.inputType);
    console.log("output type: " + this.state.outputType);
    console.log("conversion type: " + this.conversionType);
    return (
      <div className="main">
        <div className="header">VALUE CONVERTER</div>
        <div className="buttons">
          <div className="inputButton">
            <div>Input:</div>
            <div>
              <Button 
              value={this.state.inputType} 
              onChange={this.handleInputTypeChange}
              item1="Decimal" 
              item2="Binary" 
              item3="Hex"/>
            </div>
          </div>
          <div className="outputButton">
            <div>Output:</div>
            <div>
              <Button 
              value={this.state.outputType} 
              onChange={this.handleOutputTypeChange}
              item1="Binary"
              item2="Decimal"
              item3="Hex"
              
              />
            </div>
          </div>
        </div>
        <div className="inputOutputSec">
          <div>{this.state.inputType}</div>
          <InputButton
            value={this.state.input}
            onChange={this.handleInputChange}
          />
          <div>In {this.state.outputType} is...</div>
          <div className="outputVal">
            {this.renderOutputSection(this.state.outputType)}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
