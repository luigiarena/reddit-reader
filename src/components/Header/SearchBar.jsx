import "./Header.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function SearchBar () {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={(darkMode ? "dark" : "") + " search-box"}>
            <input type="text" placeholder="Search" 
                className="" />
            <button className="search-btn"><i className="fa fa-search"></i></button>
        </div>
    )
}