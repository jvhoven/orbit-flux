import React from 'react'
import Repos from './../services/repo'

export default class Settings extends React.Component {

    constructor() {
        super();

        this.state = {
            message: ''
        };
    }

    update(e) {
        e.preventDefault();
        let instance = this;

        Repos.getAll().catch(function(err) {
            if(err) {
                let error = JSON.parse(err.response)
                instance.setState({
                    message: error.message
                });
                return
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Hello settings</h1>
                <button type="submit" onClick={this.update.bind(this)}>Submit</button>
                <span className="error">{this.state.message == null ? '' : this.state.message}</span>
            </div>
        )
    }

}
