import React, {Component} from 'react';


class LinkCreate extends Component{

    constructor(props){
        super(props);
        this.state = { error: ''};
    }
    
    onSubmitHandler(event){
        event.preventDefault(); //to prevent webpage from reloading on click of submit button
        Meteor.call('links.insert',this.refs.link.value, (error) => {
            if(error){
                this.setState({error:'Invalid URL'});
            }
            else{
                this.setState({error:''});
                this.refs.link.value = '';
            }
        });
        //console.log(this.refs.link.value);
    }
    render(){
          // console.log("Check");
        return(
            <form onSubmit={this.onSubmitHandler.bind(this)}>
                <div className="form-group">
                    <label> Label to Shorten</label>
                    <input ref="link" className="form-control" />
                </div>
                <div className="text text-danger">{this.state.error}</div>
                <button className="btn btn-primary">Shorten!</button>
            </form>
        );
    };

}

export default LinkCreate;