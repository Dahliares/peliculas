import { useEffect, useState } from 'react';
//import movies from './movies.json';
import { Pelicula } from './Pelicula';
import styles from "./PelisGrid.module.css"
import { get } from '../utils/httpClient';
import { Spinner } from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';

export function PelisGrid({search}) {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    


    useEffect(() => {
        let searchUrl = search 
            ? '/search/movie?query=' + search + "&page=" + page
            : "/discover/movie?page=" +page;
        get(searchUrl).then((data) => {
            setMovies(prevMovies => prevMovies.concat(data.results));
            sethasMore(data.page < data.total_pages ? true : false)
          
        });
    }, [search, page]);

    if(movies.length === 0){
        return <Empty />
    }

    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
      >
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <Pelicula key={movie.id} peli={movie} />
                ))}
            </ul>
        </InfiniteScroll>

    );

}