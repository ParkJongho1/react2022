import React, { useEffect, useState } from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import ContTitle from "../layout/Title";
import ContContact from "../layout/Contact";
import YoutubeList from "../includes/YoutubeList";
import YoutubeSearch from "../includes/YoutubeSearch";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// require('dotenv').config() 
// npm i dotenv
// ${process}

function Youtube() {
    const [videos, setVideos] = useState([]);

    const mainAnimation = () => {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
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
            gsap.to(".youtube__inner", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "power4.out"
            });
            gsap.to(".youtube__search", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.7,
                ease: "power4.out"
            });
            gsap.to(".youtube__list", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.9,
                ease: "power4.out"
            });
        }, 2000)
    }

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=${process.env.REACT_APP_API}&type=video`, requestOptions)
            .then(response => response.json())
            .then(result =>setVideos(result.items))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };
            
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=webstoryboy&key=${process.env.REACT_APP_API}&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.items)
                mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, []);



    return (
        <>
            <Loading />
            <Header />
            <Contents>
                <ContTitle title={["youtube","reperence"]} />
                <section className="youtube__cont light">
                    <div className="container">
                        <div className="youtube__inner">
                            <YoutubeSearch onSearch={search}/>
                            <YoutubeList videos={videos}/>
                       </div>
                    </div>
                </section>
                <ContContact />
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube