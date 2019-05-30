import React, { Component } from "react";
import "./mainPage.css";
import Button from "./Components/Button";
import InputButton from "./Components/InputButton";
import ConversionOps from "./ConversionOps.js"

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: "Decimal",
      input: "",
      outputType: "Binary"
    };
    this.conversionType="decToBin";
    this.converter = new ConversionOps();
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
    }, () => {this.changeConversionType()});
  }

  handleOutputTypeChange = event => {
    this.setState({
      outputType: event.target.value
    }, () => {this.changeConversionType()});
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


  renderOutput = outputType => {
    switch(outputType) {
      case "decToBin":
        return this.converter.decToBin(this.state.input);
      case "decToHex":
        // code block
        break;
      case "binToDec":
        return this.converter.binToDec(this.state.input);
      case "binToHex":
        return this.converter.binToHex(this.state.input);

      case "hexToDec":
        return this.converter.hexToDec(this.state.input);

      case "hexToBin":
        return this.converter.hexToBin(this.state.input);

      default: 
        return this.state.input;
    }
    

  }
  
  render() {
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
            placeholderVal={this.state.inputType}
          />
          <div>In {this.state.outputType} is...</div>
          <div className="outputVal">
            {this.renderOutput(this.conversionType)}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
