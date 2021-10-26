import React from 'react'


class ClassHelloWorld extends React.Component{
    render( ){
        return <div>
        <hr/>
        <h6>from class</h6>
        <h1> HELLO {this.props.name} </h1>
        <hr/>
        </div>
   }
}

export default ClassHelloWorld  