import React, { Component } from "react";
import "./App2.css";

class calculatorone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  handleClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case "=":
        try {
          this.setState({ result: (eval(this.state.result) || "") + "" });
        } catch (e) {
          this.setState({ result: "error" });
        }
        break;
      case "C":
        this.setState({ result: "" });
        break;
      default:
        this.setState({ result: this.state.result + value });
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <input type="text" value={this.state.result} />
          <div className="buttons">
            <button onClick={this.handleClick} value="1">
              1
            </button>
            <button onClick={this.handleClick} value="2">
              2
            </button>
            <button onClick={this.handleClick} value="3">
              3
            </button>
            <button onClick={this.handleClick} value="+">
              +
            </button>
            <button onClick={this.handleClick} value="4">
              4
            </button>
            <button onClick={this.handleClick} value="5">
              5
            </button>
            <button onClick={this.handleClick} value="6">
              6
            </button>
            <button onClick={this.handleClick} value="-">
              -
            </button>
            <button onClick={this.handleClick} value="7">
              7
            </button>
            <button onClick={this.handleClick} value="8">
              8
            </button>
            <button onClick={this.handleClick} value="9">
              9
            </button>
            <button onClick={this.handleClick} value="*">
              *
            </button>
            <button onClick={this.handleClick} value=".">
              .
            </button>
            <button onClick={this.handleClick} value="0">
              0
            </button>
            <button onClick={this.handleClick} value="=">
              =
            </button>
            <button onClick={this.handleClick} value="/">
              /
            </button>
            <button onClick={this.handleClick} value="C">
              C
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default calculatorone;
