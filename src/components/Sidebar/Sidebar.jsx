import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setQuery } from '../../features/slices/searchSlice'
import { ThemeContext } from '../ThemeContext'
import './Sidebar.css'

function Sidebar() {
    const { darkMode } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const params = useParams();

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

    let cat = useSelector(
        (state) => state.search.category
    );

    return (
        <div className={"sidebar" + (darkMode ? " dark" : "")}>
            <h2>Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li className={"category" + (category === cat ? ' active' : '')} key={index} 
                        onClick={() => {
                            dispatch(setQuery(''));
                            dispatch(setCategory(category));
                        }}>
                        <Link to={category === 'all' ? '/' : `/category/${category}`} 
                            key={'link-' + index}>
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;