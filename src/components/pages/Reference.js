import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import ContTitle from "../layout/Title";
import ContContact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

// function Reference(){
//     return(
    //     <>
            // <Header color="light"/>
            // <Contents>
            //     <ContTitle title={["Reference","Book","light"]}/>
            //     <ReferCont color="light" />
            //     <ContContact />
            // </Contents>
            // <Footer  color="light"/>
    //     </>
    // )
// }

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
    }

    getSite = () => {
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
            gsap.to(".refer__inner", {
                duration: 0.5, 
                y: 0,
                opacity: 1,
                delay: 2.0
            });
        },10)
    }

    getRefers = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
         } = await axios.get("https://parkjongho1.github.io/react2022/src/assets/json/reference.json");

        this.setState({refers: htmlRefer, isLoading: false})
        this.getSite();
    }

    componentDidMount(){
        setTimeout(() => { 
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#f0EEEB";
            this.getRefers();
        }, 2000);
    }

    render(){
        const {isLoading, refers} = this.state;

        console.log(refers)
        return (
            <>
           {isLoading ? (
               <Loading color="light" />
               ) : (
                <>
                    <Header color="light"/>
                    <Contents>
                        <ContTitle title={["Reference","Book","light"]}/>
                        <ReferCont refers={refers} color="light" />
                        <ContContact />
                    </Contents>
                    <Footer  color="light"/>
                </>                   
               )} 
            </>
        )
    }
}

export default Reference;