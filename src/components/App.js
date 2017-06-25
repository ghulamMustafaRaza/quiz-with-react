import React, { Component , } from 'react';
import Quiz from './Quiz';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heading: "Quiz"
    }
    this.changeHeading = this.changeHeading.bind(this)
  }
  changeHeading(newHeading){
    this.setState({heading:newHeading})
  }
  render() {
    return (
      <div className="container" style={{}} >
        <div className="page-header">
          <h1>
            {this.state.heading}
          </h1>
        </div>
        <div className="jumbotron">
          <Quiz onload={this.changeHeading}/>
        </div>
      </div>
    );
  }
}

export default App;
