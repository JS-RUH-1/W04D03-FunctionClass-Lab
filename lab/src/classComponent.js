
import React from 'react';

class LabComponentClass extends React.Component {


    componentWillMount(){
        console.log("This is executed before rendering");
    }
    
    componentDidMount(){
        console.log("This is executed after rendering");
    }
    
    render() { 
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}
 
export default LabComponentClass;