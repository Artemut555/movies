import React, { PureComponent } from "react";
import "./MovieResultRow.css";
import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom";

export default class MovieResultsRow extends PureComponent {

  render() {
    const src = this.props.img;
    const url = "/" + this.props.id;
    let rating = this.props.rating;

    if (rating === 0) {
      rating = "нет";
    }

    return (
      <div
          className="component-movie-result-row"
      >
        <nav>
          <img src={src} alt={"img"}/>
          <span className="title">{this.props.title}</span>
          <span className="rating">Оценка: {rating}</span>
          <Link className="link" to={url}>Оценить</Link>
        </nav>
        <Outlet />
      </div>
    );
  }
}
