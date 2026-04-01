import "./Card.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import newsApi from "../../features/api/newsApi";

function Card({ cardInfo }) {
    const { darkMode } = useContext(ThemeContext);
    const { title, author, content, description, publishedAt, urlToImage, url, source} = cardInfo;
    const sourceName = cardInfo.source.name;
    const formattedDate = new Date(publishedAt).toLocaleDateString();

    return (
        <div className={(darkMode ? "dark" : "") + " card"}>
            <div className="card-header">
                <h2>{title}</h2>
            </div>
            <div className="card-body">
                <img src={urlToImage} alt="" />
                <p>{description}</p>
            </div>   
            <div className="card-footer">
                <span>Source: {sourceName}</span>
                <span>Date: {formattedDate}</span>
            </div>
        </div>
    )
}

function CardsContainer() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            const data = await newsApi.getNews();
            setNewsList(data);
        }
        fetchNews();
    }, []);

    return (
        <div className="cards-container">
            {
                !newsList ?

                () => {
                    return (<><Card /><Card /></>)
                } :

                newsList.slice().map((item, index) => {
                    return <Card key={index} cardInfo={item} />
                })
            }
        </div>
    )
}

export default CardsContainer;