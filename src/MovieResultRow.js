import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./MovieResultRow.css";

export default class MovieResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.string
  };

  render() {
    const src = this.props.img;
    return (
      <div
          className="component-movie-result-row"
      >
        <img src={src} />
        <span className="title">{this.props.title}</span>

      </div>
    );
  }
}
