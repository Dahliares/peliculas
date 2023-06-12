import styles from "./Pelicula.module.css";
import placeholder from '../placeholder.jpg';
import { Link } from 'react-router-dom';

export function Pelicula({ peli }) {

    const imageUrl = peli.poster_path 
    ? "https://image.tmdb.org/t/p/w300" + peli.poster_path
    : placeholder;

    return (

        <li className={styles.pelicula}>
            <Link to={"/movies/" + peli.id}>           
            <img 
                width={230}
                height={345}
                className={styles.movieImage} 
                src={imageUrl} 
                alt={peli.title} />
            <div>{peli.title}</div>
             </Link>
        </li>

    );
}

