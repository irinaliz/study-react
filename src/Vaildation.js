import React, { Component } from "react";
import './Vaildation.css'

class Validation extends Component {
    state = {
        password : '',
        clicked: false ,
        validated: false
    }
    input = React.createRef();

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                type = "password"
                value= {this.state.password}
                onChange = {this.handleChange}
                className = { this.state.clicked ? ( this.state.validated ? 'success' : 'failure') : ''} 
                ref={(abc) => this.input=abc}
                />
                
                <button onClick={this.handleButtonClick }> 검증하기 </button>
            </div>
        )
    }
}
export default Validation