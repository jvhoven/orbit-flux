import request from 'reqwest'
import when from 'when'

class AuthService {

    login(username, password) {
        var body = {
            scopes: [
                "public_repo"
            ],
            client_secret: "15baff442ffce207014e27be10e8d6ad1159ea7c",
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
