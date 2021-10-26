import React from "react";
import ReactDOM from "react-dom";
class ClassHelloWorld extends React.Component {
  componentWillMount() {
    console.log("This is executed before rendering");
    console.log(ReactDOM.findDOMNode(this));
  }

  componentDidMount() {
    console.log("This is executed after rendering");
    console.log(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}
export default ClassHelloWorld;
