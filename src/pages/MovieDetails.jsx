import { useEffect, useState } from 'react';
//import movie from './movie.json';
import placeholder from '../placeholder.jpg';
import styles from './MovieDetails.module.css';
import { get } from '../utils/httpClient';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';

export function MovieDetails(){

    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie]= useState(null);
    

    useEffect(() => {

        setIsLoading(true);
       get("/movie/" + movieId).then((data) => {
        setIsLoading(false);
        setMovie(data);
       });

    }, [movieId]);

    if (isLoading){
        return <Spinner />
    }

    const imageUrl = movie.poster_path 
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : placeholder;
    

    return( 
    <div className={styles.detailsContainer}>
        <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title} />
        <div className={styles.col + " " + styles.movieDetails} >
            <p className={styles.first}><strong>Title: </strong> {movie.title}</p>
            <p><strong>Description: </strong> {movie.overview}</p>
            <p><strong>Genres: </strong>
                {movie.genres.map(genre => genre.name).join(', ')}
            </p>
        </div>
    </div>
    )
}