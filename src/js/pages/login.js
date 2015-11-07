import React from 'react'
import ReactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Auth from './../services/auth'

export default class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            user: '',
            password: '',
            message: ''
        };
    }

    login(e) {
        e.preventDefault();
        let instance = this;

        Auth.login(this.state.user, this.state.password).catch(function(err) {
            if(err) {
                let error = JSON.parse(err.response)
                instance.setState({
                    name: '',
                    email: '',
                    message: error.message
                });
                return
            }
        });
    }

    render() {
        return (
            <form role="form">
                <div className="form-group">
                  <input type="text" valueLink={this.linkState('user')} placeholder="Username" />
                  <input type="password" valueLink={this.linkState('password')} placeholder="Password" />
                </div>
                <button type="submit" onClick={this.login.bind(this)}>Submit</button>
                <span className="error">{this.state.message == null ? '' : this.state.message}</span>
            </form>
        );
    }
}

ReactMixin(Login.prototype, LinkedStateMixin);
