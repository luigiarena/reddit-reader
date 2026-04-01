import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import './Sidebar.css'

function Sidebar() {
    const { darkMode } = useContext(ThemeContext);

    const categories = [
        'all',
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology',
        'world'
    ];

    return (
        <div className={"sidebar" + (darkMode ? " dark" : "")}>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li className="category" key={category}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;