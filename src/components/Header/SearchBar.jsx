import "./Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../features/slices/searchSlice";

export default function SearchBar () {
    const { darkMode } = useContext(ThemeContext);
    //const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const searchTerm = useSelector(
        (state) => state.search.query
    );

    function handleSearch(event) {
        event.preventDefault();
        dispatch(setQuery(event.target.value));
    }

    return (
        <div className={(darkMode ? "dark" : "") + " search-box"}>
            <input type="text" placeholder="Search" 
                className="" value={searchTerm} onChange={handleSearch}/>
            <Link className="search-btn"
                to={`/search/${searchTerm}`}>
                <i className="fa fa-search"></i>
            </Link>
        </div>
    )
}