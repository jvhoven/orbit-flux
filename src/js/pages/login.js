import React from 'react'
import ReactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Auth from './../services/AuthService'

export default class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            user: '',
            password: ''
        };
    }

    login(e) {
        e.preventDefault();

        Auth.login(this.state.user, this.state.password).catch(function(err) {
            console.log("Error logging in ", err);
        });
    }

    render() {
        return (
            <form role="form">
                <div className="form-group">
                  <input type="text" valueLink={this.linkState('user')}placeholder="Username" />
                  <input type="password" valueLink={this.linkState('password')} placeholder="Password" />
                </div>
                <button type="submit" onClick={this.login.bind(this)}>Submit</button>
            </form>
        );
    }
}

ReactMixin(Login.prototype, LinkedStateMixin);
