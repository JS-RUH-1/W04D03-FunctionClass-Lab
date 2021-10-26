import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

class LifeCycleMethods extends React.Component {

    componentWillMount(){
        console.log("This is executed before rendering");
       // console.log(ReactDOM.findDOMNode(this));
    }
    
    componentDidMount(){
        console.log("This is executed after rendering");
      //  console.log(ReactDOM.findDOMNode(this));
    }
    componentDidUpdate(){
        console.log("This is executed after re-rendering");
    }
    componentWillUnmount(){
        console.log("This is executed after UN-rendering");
      //  console.log(ReactDOM.findDOMNode(this));
    }
    
    render() { 
        return (
            <div>
            <hr/>
                <h1>LifeCycleMethods.JS</h1>
            </div>
        );
    }
}
 
export default LifeCycleMethods;