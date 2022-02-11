// import movieList from "./data/movie500.json";
import MovieService from "./MovieService";


export async function getMovies() {
    const customersService  =  new  MovieService();
    const result = await customersService.getMovies();
    return result.data;
}

export async function getMovie(id) {
    const customersService  =  new  MovieService();
    const result = await customersService.getMovies();
    let movie = result.data.find(
        movie => movie.imdbId === id
    );
    console.log("Get movie ", movie);
    return movie;
}