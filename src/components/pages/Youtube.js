import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import ContTitle from "../layout/Title";
import ContContact from "../layout/Contact";
import YoutubeCont from "../includes/YoutubeCont";

function Youtube(){
    return(
        <>
            <Header />
            <Contents>
                <ContTitle title={["Coding","Youtube"]}/>
                <YoutubeCont />
                <ContContact />
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube;