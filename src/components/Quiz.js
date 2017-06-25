import React, {Component} from 'react';
import $ from "jquery"


const Question = ({
  question,
  index,
  onAnswerSelected,
  onSubmit,
  disable
}) => {
  return (
    <div className="clearfix">
      <h3>{question.question}</h3>
      <ol type="A">
      {question.answers.map((answer, i) =>
        <li key={`${index}-${i}`}>
          <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`} defaultChecked={false} value={i} onChange={onAnswerSelected} />
          {' '}
          <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
        </li>
      )}
      </ol>
      <button className="btn btn-primary pull-right" disabled = {disable?true:false} onClick={onSubmit}>Submit</button>
    </div>
  )
}
class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = {
            quiz: {},
            index:0,
            numberOfQuestions:0,
            score: 0,
            answers:[],
            completed: false,
            disable: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    componentDidMount(){
        $.getJSON('./quiz.json', function(result){
            this.setState ({quiz: result});
            this.setState ({numberOfQuestions: result.questions.length});
            console.log(result)
            console.log(result.questions.length)
        }.bind(this))
    }
    handleReset() {
        this.setState({
            index:0,
            score: 0,
            answers:[],
            completed: false
        })
        console.log(this.state)
    }
    handleSubmit() {
        if (this.state.index + 1 < this.state.numberOfQuestions) {
            this.setState({'index': this.state.index + 1})
        } else {
            this.setState({'completed': true})
            let score = this.state.score || 0
            this.state.answers.map((answer, i) => (
            score = score + this.state.quiz.questions[i].answers[answer].point
            ))
            this.setState({'score': score})
        }
        this.setState({
            disable: true
        })
    }
    handleAnswerSelected(event) {
        let list = [...this.state.answers.slice(0, this.state.index),
                    parseInt(event.target.value),
                    ...this.state.answers.slice(this.state.index + 1)]
        this.setState({'answers': list, disable: false})
    }
    render() {
        const {quiz, index, numberOfQuestions, score} = this.state
        return (
            <div>
                <div className="page-header"><h2>
                    {this.state.quiz.title}    
                </h2></div>
                <div className="jumbotron">
                {this.state.completed ?
                    <div className="clearfix">
                        <p>Congratulation, you finish the quiz</p>
                        <h2 className="text-center">Total Questin is {numberOfQuestions}</h2>
                        <h2 className="text-center">Your score is {score}</h2>
                        <h2 className="text-center">Your Percentage is {100/numberOfQuestions*score}%</h2>
                        <div className="btn btn-success pull-right" onClick={this.handleReset}>
                            Retake Quiz
                        </div>
                    </div>
                :
                    <div>
                    <h2>Question {index + 1} of {numberOfQuestions}</h2>
                    {quiz.questions && index < quiz.questions.length ?
                    <Question
                        question={quiz.questions[index]}
                        index={index}
                        onAnswerSelected={(event) => this.handleAnswerSelected(event)}
                        onSubmit={() => this.handleSubmit()}
                        disable = {this.state.disable}
                    />
                    : ''}
                    </div>
                }
                </div>
            </div>
        )
    }
}
export default Quiz;
