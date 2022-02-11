import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import MovieResults from "./MovieResults";
import filterMovie from "./filterMovie";
import {RatingButton} from "./RatingButton";
import styles from "./App.css";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      text: "",
      filteredMovie: [],
    };
  }

  componentDidMount() {
    filterMovie("", 0,20).then(result => {
      this.setState({
        rating: 0,
        text: "",
        filteredMovie: result,
      })
    })
  }

  handleSearchChange = event => {
    let rate = this.state.rating;
    filterMovie(event.target.value, rate, 20).then(result => {
      this.setState({
        rating: rate,
        text: event.target.value,
        filteredMovie: result
      });
    })
  }

  handleRatingChange = event => {
    let txt = this.state.text;
    let target = Number.parseInt(event.target.value, 10);
    filterMovie(txt, target,20).then(result => {
      this.setState({
        rating: target,
        text: txt,
        filteredMovie: result
      });
    })
  };

  render() {
    return (
      <div className="wrapper">
        <Header />

        <SearchInput textChange={this.handleSearchChange} />
        <div className={"listBody"}>
          <MovieResults movieData={this.state.filteredMovie} />
          <RatingButton rateChange={this.handleRatingChange}/>
        </div>

      </div>
    );
  }
}
