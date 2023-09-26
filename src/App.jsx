import React, { Component } from "react";
import Count from "./containers/Count"; //import Count container component
import Person from "./containers/Person"; //import Person container component

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    );
  }
}
