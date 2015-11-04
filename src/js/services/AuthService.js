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
            console.log(response);
        });
    }

    /*createToken() {
        return when(request({
            url: 'https://api.github.com/authorizations',
            method: 'POST',
            type: 'json',
            crossOrigin: true,
            headers: {
                "Authorization": "Basic " + btoa(this.username + ":" + this.password)
            },
            data: {
                "scopes": [
                    "user",
                    "repo"
                ],
                "note": "An authorization code for Orbit",
                "client_id": "552edb255a764318b892",
                "client_secret": "15baff442ffce207014e27be10e8d6ad1159ea7c"
            }
        }))
        .then(function(response) {
            console.log(response);
        });
    }*/
}

export default new AuthService()
