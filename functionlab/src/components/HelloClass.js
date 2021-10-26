import React from 'react'

class HelloC extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillUnmount() {
        console.log("This is executed before rendering");
      }

    componentDidMount() {
        console.log("This is executed after rendering");
      }
    
    

    render(){
        return(
            <h3>Hello {this.props.name}, you are in class component</h3>
        );
    }
}

export default HelloC;
