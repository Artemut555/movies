// import movieList from "./data/movie500.json";

import  MovieService  from './MovieService';


export default async function filterMovie(searchText, rating, maxResults) {
    let movieList;

    const customersService  =  new  MovieService();
    const result = await customersService.getMovies();
    movieList = result.data;

    // console.log(movieList);
    const filtered = movieList.filter(movie => {
        // console.log(movieList);
        // console.log(movieList);
        if (movie.Title.toLowerCase().includes(searchText.toLowerCase()) && movie.Rating === rating) {
            return true;
        }

        return false;
    }).slice(0, maxResults);

    console.log(filtered);
    return filtered;
}
