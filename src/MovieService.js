import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class MovieService {

    constructor(){}

    getMovies() {
        const url = `${API_URL}/api/films/`;
        return axios.get(url).then(response => response.data);
    }

    getMovie(pk) {
        const url = `${API_URL}/api/films/${pk}`;
        return axios.get(url).then(response => response.data);
    }

    updateMovie(customer){
        const url = `${API_URL}/api/films/${customer.pk}`;
        return axios.put(url,customer);
    }
}
