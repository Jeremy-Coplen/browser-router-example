import React, { Component } from "react"

class Params extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paramOne: "",
            paramTwo: ""
        }
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(this.props.location.search)
        let paramOne = urlParams.get("paramone")
        let paramTwo = urlParams.get("paramtwo")

        let updateParamOne = ""
        let updateParamTwo = ""

        if(paramOne === null) {
            updateParamOne = "Not Found"
        }
        else {
            updateParamOne = paramOne
        }

        if(paramTwo === null) {
            updateParamTwo = "Not Found"
        }
        else {
            updateParamTwo = paramTwo
        }

        this.setState({
            paramOne: updateParamOne,
            paramTwo: updateParamTwo
        })
    }

    render() {
        return (
            <div className="params">
                <p style={{ "color": "#FFF", "marginBottom": "5px" }}>Params page</p>
                <p style={{ "color": "#FFF", "marginBottom": "5px" }}>Param One: {this.state.paramOne}</p>
                <p style={{ "color": "#FFF", "marginBottom": "5px" }}>Param Two: {this.state.paramTwo}</p>
            </div>
        )
    }
}

export default Params