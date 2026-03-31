import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import SearchBar from "./SearchBar";
import "./Header.css";
import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";
import moon from "../../assets/moon-icon.svg";
import sun from "../../assets/sun-icon.svg";

export default function Header () {
    const { darkMode, toggleThemes } = useContext(ThemeContext);

    return (
        <header className={(darkMode ? "dark" : "" ) + " header-container"}>
            <div className="flex flex-row flex-1 items-center gap-2">
                <img src={logo2} alt="" className="logo" />
                <h3 className="page-title">Reddit reader</h3>
            </div>

            <SearchBar />
            <div className="flex flex-1 justify-end">
                <img src={darkMode ? sun : moon} onClick={toggleThemes} alt="" className={(darkMode ? "dark" : "") + " theme-toggle"}/>
            </div>
        </header>
    )
}