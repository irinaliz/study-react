import React , {Component} from "react";

class EventPractice extends Component{
    state = {
        username: '',
        message: ''
    }
    // constructor(pros) {
    //     super(pros);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this)
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        alert(this.state.username + " : "+ this.state.message);
        this.setState({
            message: '',
            username: ''
        })
    }
    render() {
        return(
            <div>
                <h1> 이벤트 연습 </h1>
                <input type="text" name="message" placeholder="abc"
                value= {this.state.message}
                onChange ={this.handleChange}
                /*
                onChange={
                    (e) => {
                        // console.log(e.nativeEvent.data);
                        this.setState({
                            message: e.target.value
                        })
                    }
                }
                */

                />

            <input type="text" name="username" placeholder="사용자명"
                value= {this.state.username}
                onChange ={this.handleChange}
                />

                <button 
                // onClick={()=>{
                //     alert(this.state.message);
                //     this.setState({
                //         message: ''
                //     })
                // } }
                onClick = { this.handleClick}
                >
                    확인
                </button>
            </div>
        )
    }
}
export default EventPractice