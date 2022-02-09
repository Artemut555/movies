import * as React from 'react';
import { PureComponent } from "react";
import PropTypes from "prop-types";
import "./RatingButton.css";

export default class RatingButton extends PureComponent {
    static propTypes = {
        rateChange: PropTypes.func
    };

    handleChange = event => {
        this.props.rateChange(event);
    };

    render() {
        return (
            <div onChange={this.handleChange} className="component-rating-button">
                <form>
                    <input type="radio" value="0" name="rating" /> Без оценки
                    <input type="radio" value="1" name="rating" /> 1
                    <input type="radio" value="2" name="rating" /> 2
                    <input type="radio" value="3" name="rating" /> 3
                    <input type="radio" value="4" name="rating" /> 4
                    <input type="radio" value="5" name="rating" /> 5
                </form>
            </div>
        );
    }
}