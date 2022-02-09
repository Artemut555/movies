import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import MovieResultRow from "./MovieResultRow";
import "./MovieResults.css";

export default class MovieResults extends PureComponent {
  static propTypes = {
    movieData: PropTypes.array
  };

  render() {
    return (
      <div className="component-movie-results">
        {this.props.movieData.map(movieData => (
          <MovieResultRow
            img={movieData.poster}
            title={movieData.title}
            id={movieData.imdbId}
          />
        ))}
      </div>
    );
  }
}
