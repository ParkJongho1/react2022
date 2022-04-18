import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import ContTitle from "../layout/Title";
import ContContact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";

function Reference(){
    return(
        <>
            <Header color="light"/>
            <Contents>
                <ContTitle title={["Reference","Book","light"]}/>
                <ReferCont color="light" />
                <ContContact />
            </Contents>
            <Footer  color="light"/>
        </>
    )
}

export default Reference;