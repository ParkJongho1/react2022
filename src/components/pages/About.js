import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import ContTitle from "../layout/Title";
import ContContact from "../layout/Contact";
import AboutCont from "../includes/AboutCont";

function About(){
    return(
        <>
            <Header color="light"/>
            <Contents>
                <ContTitle title={["About","Me","light"]}/>
                <AboutCont color="light" />
                <ContContact />
            </Contents>
            <Footer color="light"/>
        </>
    )
}

export default About;