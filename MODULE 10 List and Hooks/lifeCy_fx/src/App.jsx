import React, { Component } from 'react'
import Counter from './Counter';

class App extends Component {
  
  constructor(){ 
      super(); //to get data access from component
      this.state={
        count:0
      }
    }

  //   componentDidMount(){ //responsible for 1st time rendering
  //     console.log("componentDidMount : When component render first time");
  // }
 
//   componentWillUnmount(){
//     console.log("componentWillUnmount : Dead");
// }
  render() {
    return (
      <div>
        <Counter number={this.state.count}></Counter>
        <button onClick={()=>{ // fx for increase count value
          this.setState({count : this.state.count + 1})
          }}>Increment</button>
          {/* <p>{this.state.count}</p> */}
      </div>
    )
  }
}
export default App;