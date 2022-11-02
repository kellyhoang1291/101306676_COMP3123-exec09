import React, { Component } from "react"

class Footer extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <h5>{this.props.message}@2022</h5>
        )
    }
}

export default Footer