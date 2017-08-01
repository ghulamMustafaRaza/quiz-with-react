import React, { Component , } from 'react';
import Quiz from './Quiz';
import Add from './Add';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <div className="container">
        <Router className="">
        <div>
          <ul className="nav justify-content-end" style={{display: "flex",borderBottom:"1px solid #ddd"}}>
            <li className="nav-item">
              <Link className="nav-link active" to="/">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" to="/addQuiz">Add A Question</Link>
            </li>
          </ul>
            <Route exact path="/" component={Quiz}/>
            <Route path="/addQuiz" component={Add}/>
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
