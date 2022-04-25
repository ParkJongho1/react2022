import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import ContTitle from "../layout/Title";
import Footer from "../layout/Footer";
import ContContact from "../layout/Contact";
import MovieCont from "../includes/MovieCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

class Youtube extends React.Component {
    state = {
        isLoading: true,
        lists: [],
        searchs: []
    }

    mainAnimation = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.8,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8,
                bottom: 0,
                delay: 0.2
            });
            gsap.to(".cont__title strong", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.0
            });
            gsap.to(".cont__title em", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.3
            });
            gsap.to(".youtube__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.5
            });
        },10)
    }

    getMovies = async () => {
        const lists = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=9176c3bc2c2c9880b4ee1d76226e2b27&query=bts")

        console.log(lists)
        this.setState({lists, isLoading: false});
        this.mainAnimation();
    }

    componentDidMount() {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#000";
            this.getMovies();
        }, 2000)
    }

    render() {

        const { isLoading, lists } = this.state;
        return (
            <>
           {isLoading ? (
               <Loading  color="black" />
           ) : (
                <>
                    <Header />
                    <Contents>
                        <ContTitle title={["movie", "reference"]}/>
                            <MovieCont lists = {lists}>
                            </MovieCont>
                        <ContContact />
                    </Contents>
                    <Footer />
                </>
           )}
           </>
        )
    }
}


export default Youtube;