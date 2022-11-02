import React from "react"

function Employee(props){
    let {fn, ln, city, salary} = props.employee
    return(
        <React.Fragment>
            <h5>{fn} {ln} {city} {salary}</h5>
            <h4>Employee Details</h4>
            <p>First Name: {props.employee.fn}</p>
            <p>Last Name: {props.employee.ln}</p>
            <p>Salary: ${props.employee.salary}</p>
            <p>City: {props.employee.city}</p>
        </React.Fragment>
    )
}

export default Employee