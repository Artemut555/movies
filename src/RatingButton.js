import * as React from 'react';
import {PureComponent} from "react";
import styles from "./RatingButton.css";

export const RatingButton = ({rateChange}) => {
    console.log(styles.ratingForm);

    return (
        <div>
        <div onChange={(event => rateChange(event))} className={"component-rating-button"}>
            <form className={"ratingForm"}>
                {["Без оценки", 1, 2, 3, 4, 5].map(value => {
                    const num = value === "Без оценки" ? 0 : value;
                    return <div className={styles.ratingRadio} key={num}>
                        <input type="radio" value={num} name="rating"/> <label>{value}</label>
                    </div>
                })}
            </form>
        </div>
        </div>
    );

}