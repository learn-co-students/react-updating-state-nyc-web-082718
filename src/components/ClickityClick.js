// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
   //end of constructor

  //Define the initial state
  this.state = {
    hasBeenClicked: false, //this will change
  };
}

  //to update our state, we use this.setState() and pass
  //in an object. This object will get merged with the
  //current state. When the state has been updated, our component
  //re-renders automatically.
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked)) // prints true
  }

  render() {
    return (
      <div>
      <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
      <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }



} //end of class
export default ClickityClick
