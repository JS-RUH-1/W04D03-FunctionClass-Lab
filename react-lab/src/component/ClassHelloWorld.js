import React, { Component } from "react";
import "../App.css"
export default class ClassHelloWorld extends Component {
  constructor(name) {
    super();
    this.name = name;
  }
  componentWillMount() {
    console.log("The Component will mount ");
  }
  componentDidMount() {
    console.log("The Component did mount ");
  }

  render() {
    return (
      <div>
        <h3>The name is {this.props.name}</h3>
      </div>
    );
  }
}
