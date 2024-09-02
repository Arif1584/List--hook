import React, { Component } from 'react'

class Counter extends Component {

    componentDidUpdate(prevprops,prevState) { // Component Updatation phase
        console.log(prevprops.number)
        console.log(this.props.number);
        if(prevprops.number !== this.props.number){ //comparison two condition
            console.log("Component Updated");
        }
    }
  render() {
    return (
      <div>
     {/* data get through props */}
        <h1>{this.props.number}</h1>
    </div>
    )
  }
}
export default Counter;
