import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import ContTitle from "../layout/Title";
import PortCont from "../includes/PortCont";
import ContContact from "../layout/Contact";


function Portfolio(){
    return(
        <>
            <Header  color="light" />
            <Contents>
                <ContTitle title={["PORTFOLIO","SITE"]} />
                <PortCont />
                <ContContact />
            </Contents>
            <Footer />
        </>
    )
}

export default Portfolio;