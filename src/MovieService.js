import axios from 'axios';

// const API_URL = 'http://localhost:8000';
const API_URL = 'http://165.227.133.27';

export default class MovieService {

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
