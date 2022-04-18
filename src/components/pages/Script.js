import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import ContTitle from "../layout/Title";
import ContContact from "../layout/Contact";
import ScriptCont from "../includes/ScriptCont";

function Script(){
    return(
        <>
            <Header color="light" />
            <Contents>
                <ContTitle title={["Script","Javascript", "light"]}/>
                <ScriptCont />
                <ContContact />
            </Contents>
            <Footer  color="light" />
        </>
    )
}

export default Script;