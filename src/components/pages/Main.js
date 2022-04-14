import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents"
import Footer from "../includes/Footer";
import MainCont from "../includes/MainCont";

function Main(){
    return(
        <>
            <Header />
            <Contents>
                <MainCont />
            </Contents>
            <Footer />
        </>
    )
}

export default Main;

