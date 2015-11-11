import request from 'reqwest'
import when from 'when'
import config from '../../../config'

class AuthService {

    getAll() {
        let user = JSON.parse(localStorage.getItem('user'))
        let body = {
            type: "owner",
            sort: "updated"
        }

        return when(request({
            url: 'https://api.github.com/users/' + user.username + '/repos',
            method: 'GET',
            crossOrigin: true,
            type: 'json',
            data: JSON.stringify(body)
        }))
        .then(function(response) {
            console.log(response);
            localStorage.setItem('repositories', JSON.stringify(response))
            return true;
        });
    }
}

export default new AuthService()
