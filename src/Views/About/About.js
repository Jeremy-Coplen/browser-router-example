import React from "react"

let About = (props) => {
    let pushToHome = () => {
        props.history.push("/")
    }
    return (
        <div>
            <p style={{ "color": "#FFF" }}>About</p>
            <button style={{"marginTop": "5px"}} onClick={pushToHome}>Push to home test</button>
        </div>
    )
}

export default About