import { PelisGrid } from "../components/PelisGrid";
import { Search } from "../components/Search";
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from "../hooks/useDebouce";


export function Inicio() {

    const [query] = useSearchParams();
    let search = query.get("search");

    const debouncedSeach = useDebounce(search, 300);
    return (
        <div>
            <Search />
            <PelisGrid key={debouncedSeach} search={debouncedSeach}/>
        </div>

    )

}