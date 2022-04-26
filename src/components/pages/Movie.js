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
                    top: 0,
                });
                gsap.to("#footer", {
                    duration: 0.8,
                    bottom: 0,
                    delay: 0.2,
                });
                gsap.to(".cont__title strong", {
                    duration: 0.7,
                    y: 0,
                    opacity: 1,
                    delay: 1.0,
                    ease: "power4.out"
                });
                gsap.to(".cont__title em", {
                    duration: 0.7,
                    y: 0,
                    opacity: 1,
                    delay: 1.3,
                    ease: "power4.out"
                });
                gsap.to(".movie__inner", {
                    duration: 0.7,
                    y: 0,
                    opacity: 1,
                    delay: 1.5,
                    ease: "power4.out"
                });
                gsap.to(".movie__search", {
                    duration: 0.7,
                    y: 0,
                    opacity: 1,
                    delay: 1.7,
                    ease: "power4.out"
                });
                gsap.to(".movie__list", {
                    duration: 0.7,
                    y: 0,
                    opacity: 1,
                    delay: 1.9,
                    ease: "power4.out"
                });
            }, 2000);
        }, 2000);
    }
    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_MOVIE_API}&query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_MOVIE_API}&query=Avengers`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.results)
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
                    <section className="movie__cont">
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