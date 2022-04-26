import React, { useEffect, useState } from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ContactCont from "../includes/ContactCont";
import MovieList from "../includes/MovieList";
import MovieSearch from "../includes/MovieSearch";
import Loading from "../basics/Loading";
import { gsap } from "gsap";


function Movie(){
    const [videos, setVideos] = useState([])
    
    const mainAnimation = () => {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");

            setTimeout(() => {
                gsap.to("#header", {
                    duration: 0.8,
                    top: 0})
                gsap.to("#footer", {
                    duration: 1.2,
                    delay: 0.4,
                    bottom: 0})
                gsap.to(".cont__title strong", {
                    duration: 1.2,
                    x: 0,
                    opacity: 1,
                    ease: "back.out(2.2)",
                    delay: 0.6})
                gsap.to(".cont__title em", {
                    duration: 1.2,
                    x: 0,
                    opacity: 1,
                    ease: "back.out(2.2)",
                    delay: 0.8})
                gsap.to(".movie__inner", {
                    duration: 1.2,
                    opacity: 1,
                    y: 0,
                    ease: "back.out(2.2)",
                    delay: 0.8}) 
            }, 2000);
        }, 2000);
    }
    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_MOVIE_API}&query=${query}`, requestOptions)
            .then(response => response.text())
            .then(result => setVideos(result))
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_MOVIE_API}&query=Avengers`, requestOptions)
            .then(response => response.text())
            .then(result => {
                setVideos(videos);
                mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, [])
    console.log(videos)

    return (
        <>
            <Loading/>
            <Header />
            <Contents>
                <Title title={["movie","reference"]} />
                <section>
                    <div className="container">
                        <div className="movie__inner">
                            <MovieSearch onSearch={search} />
                            <MovieList videos={videos} />
                        </div>
                    </div>
                </section>
                <ContactCont />
            </Contents>
            <Footer />
        </>
    )
}

export default Movie;