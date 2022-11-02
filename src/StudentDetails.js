function StudentDetails(props){
    let {sid, fn, ln, college, city} = props.student
    return(
        <div>
            <p>{sid}</p>
            <p>{fn} {ln}</p>
            <p>{college}, {city}</p>
        </div>
    )
}

export default StudentDetails