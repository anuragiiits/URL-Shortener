import React, {Component} from 'react';

class LinkCreate extends Component{
 
    render(){
           console.log("Check");
        return(
            <form>
                <div className="form-group">
                    <label> Label to Shorten</label>
                    <input className="form-control" />
                </div>
                <button className="btn btn-default">Shorten!</button>
            </form>
        );
    };

}

export default LinkCreate;