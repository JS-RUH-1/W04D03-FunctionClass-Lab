import React from 'react'


const FunctionalHelloWorld = (props) => {
    console.log(props);
    return (
        <div>
        <hr/>
        <h6>from function</h6>
        <h1> HELLO {props.name} </h1>
        </div>
    )
}

export default FunctionalHelloWorld  