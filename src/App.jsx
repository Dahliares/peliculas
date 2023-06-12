import styles from './App.module.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from 'react-router-dom';
import { MovieDetails } from "./pages/MovieDetails";
import { Inicio } from "./pages/Inicio";


export function App() {

    return (
        <Router>
            <header>
                <Link to='/'><h1 className={styles.title}>Películas</h1></Link>
            </header>
            <main>
                <Routes>
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path="/" element={<Inicio />} />
                    <Route path='*' element={<Navigate replace to='/' />} />
                </Routes>

            </main>

        </Router>
    )
}

