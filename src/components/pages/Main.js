import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Main(){
//     return(
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

class Main extends React.Component {
    state = {
        isLoading: true,
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
                delay: 1.0
            });
            gsap.to(".main__inner > div:nth-child(1)", {
                duration: 0.8, 
                opacity: 1,
                y: 0,
                delay: 2.0,
            });
            gsap.to(".main__inner > div:nth-child(2)", {
                duration: 0.8, 
                opacity: 1,
                y: 0,
                delay: 2.5
            });
            gsap.to(".main__inner > div:nth-child(3)", {
                duration: 0.8, 
                opacity: 1,
                y: 0,
                delay: 3.0
            });
            gsap.to(".main__inner > div:nth-child(4)", {
                duration: 0.8, 
                opacity: 1,
                y: 0,
                delay: 3.5
            });
        }, 1000)
    }

    getMains = () => {
        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.getSite();
        }, 1600)
    }

    componentDidMount(){
        setTimeout(() => { 
            document.getElementById("loading").classList.remove("loading__active");
            this.getMains();
        }, 2000);
    }

    

    render(){
        const {isLoading} = this.state;

        return (
            <>
           {isLoading ? (
               <Loading />
               ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>                   
               )} 
            </>
        )
    }
}


export default Main;

