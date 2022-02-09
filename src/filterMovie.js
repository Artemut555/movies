import movieList from "./data/movie_cut.json";

export default function filterMovie(searchText, rating, maxResults) {
  return movieList
    .filter(movie => {
      if (movie.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }

      return false;
    })
    .slice(0, maxResults);
}
