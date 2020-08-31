import React, { Component } from "react";
import "./Lottery.css";
import LottoBall from "./LottoBall";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    ballsNum: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from({ length: this.props.ballsNum }),
    };
    this.generateNums = this.generateNums.bind(this);
  }

  generateNums() {
    this.setState({
      numbers: this.state.numbers.map(() => {
        return Math.floor(Math.random() * this.props.maxNum + 1);
      }),
    });
  }

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.numbers.map((number) => (
            <LottoBall num={number} />
          ))}
        </div>
        <button onClick={this.generateNums}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
