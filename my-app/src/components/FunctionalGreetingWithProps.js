import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props) 
    return <h1>Hello, {props.greeting}! I am {props.name}, I'm {props.age} years old.</h1>
};


export default FunctionalGreetingWithProps;