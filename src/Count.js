import React  from "react";
// import Test from "./Test";

class Count extends React.Component {
  
  state ={
    number: 0,
    fixedNumber: 0
  }
  
  plusnum = async() => {
    this.setState(prvestate => ({
      number: prvestate.number + 1
    }))
  }

  render() {
    const {number, fixedNumber} = this.state;
    return(
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
        onClick= {() => {
          this.plusnum()
        }} >
          +1
        </button>
      </div>
    );
  }
}


export default Count;
