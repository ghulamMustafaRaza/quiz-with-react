import React from 'react';
import $ from 'jquery'

class AddForm extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            oldFile: null,
            newFile: null
        }
    }
    handleClick(){
        var obj = {
            question: document.getElementById('question').value,
            answers: []
        };
        var answers = document.getElementsByClassName('answers');
        for(var i=0; i<answers.length;i++){
            obj.answers.push({
                point: answers[i].querySelector(".point").value,
                label: answers[i].querySelector(".option").value,
            })
        }
        $.getJSON("quiz.json",data=>{
            console.log(data)
            this.setState({oldFile: data})
            this.setState({newFile: data})
            console.log(this.state.newFile)
            console.log(this.state.oldFile)
            console.log(data)
            this.state.newFile.questions.push(obj)
            console.log(this.state.newFile)
            console.log(data)
        });
        $.ajax({
            type: "GET",
            dataType : 'json',
            async: false,
            url: 'writeJSON.php',
            data: { data: JSON.stringify(this.state.newFile) },
            success: function () {alert("Thanks!"); },
            failure: function() {alert("Error!");}
        });
    }
    render(){
        return(
            <div>
                <div className="page-header"><h2>Add A Question</h2></div>
                <div className="containe-fluid">
                    <form>
                        <div className="form-group">
                            <label htmlFor="question">Question</label>
                            <textarea className="form-control" id="question" rows="3"></textarea>
                        </div>
                        <div className="form-group answers"  >
                            <label htmlFor="option1">Option 1</label>
                            <div className="row">
                                <div className="col-md-10 left"><input type="text" className="form-control option" id="option1" placeholder="Option 1"/></div>
                                <div className="col-md-2 right"><input type="text"  placeholder="Point in Number"  id="point1" className="form-control point"/></div>
                            </div>
                        </div>
                        <div className="form-group answers">
                            <label htmlFor="option2">Option 2</label>
                            <div className="row">
                                <div className="col-md-10 left"><input type="text" className="form-control option" id="option2" placeholder="Option 2"/></div>
                                <div className="col-md-2 right"><input type="text"  placeholder="Point in Number"  id="point2" className="form-control point"/></div>
                            </div>
                        </div>
                        <div className="form-group answers">
                            <label htmlFor="option3">Option 3</label>
                            <div className="row">
                                <div className="col-md-10 left"><input type="text" className="form-control option" id="option3" placeholder="Option 3"/></div>
                                <div className="col-md-2 right"><input type="text"  placeholder="Point in Number"  id="point3" className="form-control point"/></div>
                            </div>
                        </div>
                        <div className="form-group answers">
                            <label htmlFor="option4">Option 4</label>
                            <div className="row">
                                <div className="col-md-10 left"><input type="text" className="form-control option" id="option4" placeholder="Option 4"/></div>
                                <div className="col-md-2 right"><input type="text"  placeholder="Point in Number"  id="point4" className="form-control point"/></div>
                            </div>
                        </div>
                        <div className="btn btn-primary pull-right" onClick={this.handleClick}>Add</div>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddForm;