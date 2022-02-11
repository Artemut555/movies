import React, { PureComponent } from "react";

import MovieResultRow from "./MovieResultRow";
import "./MovieResults.css";

export default class MovieResults extends PureComponent {

  render() {
    return (
      <div className="component-movie-results">
        {this.props.movieData.map((movieData, i) => (
          <MovieResultRow
            img={movieData.Poster}
            title={movieData.Title}
            id={movieData.imdbId}
            rating={movieData.Rating}
            pk={movieData.pk}
            key={i}
          />
        ))}
      </div>
    );
  }
}
