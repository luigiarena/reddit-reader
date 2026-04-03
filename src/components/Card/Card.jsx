import "./Card.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import newsApi from "../../features/api/newsApi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCard } from "../../features/slices/cardsSlice";

import { Link, useNavigate, useParams } from "react-router-dom";

function Card({ cardInfo }) {
    const { darkMode } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const { title, author, content, description, publishedAt, urlToImage, url, source} = cardInfo;

    const sourceName = (cardInfo.source) ? cardInfo.source.name : 'Unknown';
    const formattedDate = new Date(publishedAt).toLocaleDateString();

    function handleCardClick(e) {
        dispatch(setSelectedCard(cardInfo));
    }

    return (
        <Link to={`/news/${cardInfo.title}`} onClick={handleCardClick}>            
            <div className={(darkMode ? "dark" : "") + " card"}>
                <div className="card-header">
                    <h2>{title}</h2>
                </div>
                <div className="card-body">
                    <div className="card-img"><img src={urlToImage} alt="" /></div>
                    <p>{description}</p>
                </div>   
                <div className="card-footer">
                    <span>Source: {sourceName}</span>
                    <span>Date: {formattedDate}</span>
                </div>
            </div>
        </Link>
    )
}

function CardDetails() {
    const { darkMode } = useContext(ThemeContext);
    const cardInfo = useSelector((state) => state.cards.selectedCard);
    const navigate = useNavigate();

    console.log(`Card selezionata: ${JSON.stringify(cardInfo)}`);

    function handleBackButton(e) {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="cards-container">
            <div className={"card card-details" +(darkMode ? " dark" : "")}>
                <div className="card-header">
                    <div className="flex justify-between items-center">
                        <button className="card-button" onClick={handleBackButton}>Back</button>
                        <button className="card-button">
                            <a href={cardInfo.url} target="_blank" rel="noreferrer">
                                Source Link
                        </a></button>
                    </div>
                    <hr className="header-line"></hr>
                    <h2>{cardInfo.title}</h2>
                </div>
                <div className="card-body">
                    <div className="card-img">
                        <img src={cardInfo.urlToImage} alt="" />
                    </div>
                    <p>{cardInfo.content ? cardInfo.content : cardInfo.description}</p>
                </div>   
            </div>
        </div>
    )
}

function CardsContainer() {
    const [newsList, setNewsList] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function fetchNews() {
            const data = await newsApi.getCategoryNews(params.categoryName);
            setNewsList(data);
        }
        fetchNews();
    }, [params]);

    return (
        <div className="cards-container">
            {
                !newsList ?

                    (<>
                        <h3>Nessun risultato trovato</h3>
                        <Card key={0} cardInfo={{title: 'Nessun titolo trovato', description: 'Nessuna descrizione trovata'}} />
                    </>)
                :

                newsList.slice().map((item, index) => {
                    item.key = index;
                    return <Card key={index} cardInfo={item} />
                })
            }
        </div>
    )
}

export { Card, CardDetails, CardsContainer};