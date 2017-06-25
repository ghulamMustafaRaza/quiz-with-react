import React from "react"
import AddForm from './AddForm'
import $ from 'jquery'

class Add extends React.Component{
    constructor(props){
        super(props)
        this.handleKeySubmit = this.handleKeySubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            correctPass: "fujitsu",
            passByUsr: '',
            correct: false,
            warning: false
        }
    }
    handleKeySubmit() {
        if(this.state.passByUsr === this.state.correctPass){
            this.setState({correct: true,warning:false})
        }else{
            this.setState({warning: true})            
        }
        this.setState({passByUsr: ''})
    }
    handleChange(ev){
        this.setState({
            passByUsr: ev.target.value
        })
    }
    render() {
        return(
            <div>
                {/*this.state.correct*/true?<AddForm/>
                :
                <div>
                    <div className="page-header">
                        <h2>Please Type Product Key</h2>
                    </div>
                    <form onSubmit={ev=>{ev.preventDefault();$('#passSubb').click()}}>
                        <div className="form-group">
                            <input type="password" className="form-control" id="pass" value={this.state.passByUsr} onChange={this.handleChange} placeholder="Type Product Key"/>
                            <div className="btn btn-primary pull-right" id="passSubb" style={{marginTop:10}} onClick={this.handleKeySubmit}>Submit</div>
                        </div>
                    </form>
                    <div style={{display:this.state.warning?"block":"none", marginTop: 50}} className="alert alert-danger  " role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Warning!</strong> Please type Write Product Key
                    </div>
                </div>}
            </div>
        )
    }
}

export default Add;