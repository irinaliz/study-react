import React  from "react";
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import EventMoreTarget from "./EventMoreTarget";
import EventPracticecopy from "./EventPractice copy";
import Vaildation from "./Vaildation"
import Count from "./Count";
import StudyState from "./StudyState"
// import Test from "./Test";

class App extends React.Component {
  a = () => {
    alert("test Class");
  }
  shouldComponentUpdate() {
    console.log("업뎃되었음")
  }
  render() {
    return (
      // <StudyState clicktest={this.a} />
      <Vaildation/>
      )}

}


export default App;
