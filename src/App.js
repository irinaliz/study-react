import React  from "react";
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import Count from "./Count";
import StudyState from "./StudyState"
// import Test from "./Test";

class App extends React.Component {
  
  a = () => {
    alert("test Class");
  }
  render() {
    return (
      // <StudyState clicktest={this.a} />
      <EventPractice/>
      )}

}


export default App;
