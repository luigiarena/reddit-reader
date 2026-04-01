import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = 'https://newsapi.org/v2/top-headlines';
const params = `?country=us`;
const apiKey = 'd409ca3759f44bc68bdfba6b1ecd3a73';
//const apiKey = 'sample-key'; // Replace with a real key from newsapi.org

const getNews = async () => {
    return await fetch(`${baseQuery}${params}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.articles);
            return data.articles;
        })
        .catch(error => console.log(error));
}

const newsApi = {
    getNews
}

export default newsApi;