import React, { useState } from 'react'
import axios from 'axios';

//this is my comment means lalti comments samjhe

function FetchNews() {
    const [news, setNews] = useState([])

    const fetchNews = () => {
        // console.log("clicked");
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=8b8aead49eba483696e9616c3b9220d9")
            .then((response) => {
                 console.log(response);
                setNews(response.data.articles)
            })
    }
    return (
        <>
            <div>
                <button onClick={fetchNews}>FetchNews</button>
            </div>
            <div>
                {
                    news.map((value) => {
                        return (
                            <div>
                                <img src={value.urlToImage} alt="..."/>
                                <h5>{value.title}</h5>
                                <p>{value.discription}</p>
                                <a href="#">Main</a>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}

export default FetchNews;