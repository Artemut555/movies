import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./SearchInput.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className={styles.componentSearchInput}>
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
