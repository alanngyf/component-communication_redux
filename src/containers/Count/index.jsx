import React, { Component } from "react";
//import action
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";
//import connect to connect UI component and Redux
import { connect } from "react-redux";

// UI Component
class Count extends Component {
  state = { carName: "Benz c63" };

  // addition
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value * 1);
  };
  // substraction
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value * 1);
  };
  // add if odd
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };
  // add sync
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(value * 1, 500);
  };

  render() {
    //console.log('UI Component received props: ',this.props);
    return (
      <div>
        <h2>Count Component,Number of Persons:{this.props.renshu}</h2>
        <h4>Current Count：{this.props.count}</h4>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>+ if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>add asyn</button>&nbsp;
      </div>
    );
  }
}

// use connect()() create a Count Continaer Component
export default connect(
  (state) => ({
    count: state.count,
    personCount: state.persons.length,
  }),
  { increment, decrement, incrementAsync }
)(Count);
