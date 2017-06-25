import React from 'react';

class AddForm extends React.Component{
    render(){
        return(
            <div>
                <div className="page-header"><h2>Add A Question</h2></div>
                <div className="containe-fluid">
                    <form>
                        <div className="form-group">
                            <label for="question">Question</label>
                            <textarea className="form-control" id="question" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="option1">Option 1</label>
                            <div className="row">
                                <div className="col-md-10"><input type="text" className="form-control" id="option1" placeholder="Option 1"/></div>
                                <div className="col-md-2"><input type="number"  placeholder="point"  id="point1" className="form-control"/></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="option2">Option 2</label>
                            <div className="row">
                                <div className="col-md-10"><input type="text" className="form-control" id="option2" placeholder="Option 2"/></div>
                                <div className="col-md-2"><input type="number"  placeholder="point"  id="point2" className="form-control"/></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="option3">Option 3</label>
                            <div className="row">
                                <div className="col-md-10"><input type="text" className="form-control" id="option3" placeholder="Option 3"/></div>
                                <div className="col-md-2"><input type="number"  placeholder="point"  id="point3" className="form-control"/></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="option4">Option 4</label>
                            <div className="row">
                                <div className="col-md-10"><input type="text" className="form-control" id="option4" placeholder="Option 4"/></div>
                                <div className="col-md-2"><input type="number"  placeholder="point"  id="point4" className="form-control"/></div>
                            </div>
                        </div>
                        <div className="btn btn-primary pull-right">Add</div>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddForm;