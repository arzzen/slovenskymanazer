import axios from 'axios';

export default {
    getSlogan(route) {
        const hash = route.params.hash;
        return axios.get('/api/' + hash)
            .then(response => {
                return response.data
            })
        ;
    },

    getRandSlogan() {
        return axios.get('/api/rand')
            .then(response => {
                return response.data
            })
        ;
    },

    postSlogan(data) {
        return axios.post('/api/add', data)
            .then((response) => {
                return response.data;
            }, (error) => {
                console.log(error);
            })
        ;
    }
}