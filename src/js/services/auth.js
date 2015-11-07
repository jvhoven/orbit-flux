import request from 'reqwest'
import when from 'when'
import config from '../../../config'

class AuthService {

    login(username, password) {
        var body = {
            scopes: [
                "public_repo"
            ],
            client_secret: config.secret,
            note: "Authorization key for PMS Orbit"
        }

        return when(request({
            url: 'https://api.github.com/authorizations/clients/552edb255a764318b892',
            headers: {
                "authorization": "Basic " + btoa(username + ":" + password)
            },
            method: 'PUT',
            crossOrigin: true,
            type: 'json',
            data: JSON.stringify(body)
        }))
        .then(function(response) {
            localStorage.setItem("token", response.token);
            return true;
        });
    }
}

export default new AuthService()
