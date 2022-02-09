import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import MovieResults from "./MovieResults";
import filterMovie from "./filterMovie";
import RatingButton from "./RatingButton";
import { Link } from "react-router-dom";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      filteredMovie: filterMovie("", 0,20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      rating: this.state.rating,
      filteredMovie: filterMovie(event.target.value, 0,20)
    });
  };

  handleRatingChange = event => {
    this.setState({
      rating: this.state.rating,
      filteredMovie: filterMovie(this.state.filteredMovie, 0,20)
    });
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <h1>Bookkeeper</h1>
        <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem"
            }}
        >
          {/*<Link to="/expenses">Expenses</Link>*/}
        </nav>
        <Header />
        <RatingButton rateChange={this.handleRatingChange}/>
        <SearchInput textChange={this.handleSearchChange} />
        <MovieResults movieData={this.state.filteredMovie} />
      </div>
    );
  }
}
