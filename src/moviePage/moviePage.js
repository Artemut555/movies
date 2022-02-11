import {useParams} from "react-router-dom";
import {getMovie} from "../movieFinder";
import React, {useEffect, useState} from "react";
import {RatingButton} from "../RatingButton";
import  MovieService  from '../MovieService';
import "./moviePage.css";

const  customersService  =  new  MovieService();

export default function MoviePage() {
    let params = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(async () => {
        setMovie(await getMovie(parseInt(params.invoiceId, 10)));
    }, []);

    async function handleRatingChange(event) {
        if (movie === null) {
            return;
        }
        let  result = await customersService.getMovie(movie.pk);
        result.Rating = Number.parseInt(event.target.value, 10);
        await customersService.updateMovie(result);
    }

    return (
        <div className="movie-page">
            <div className="poster">
                <img src={movie?.Poster} />
                <span className="title">{movie?.Title}</span>
            </div>
            <div className="button">
                <RatingButton rateChange={handleRatingChange}/>
            </div>
        </div>
    )
}