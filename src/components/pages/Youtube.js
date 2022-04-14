import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents"
import Footer from "../includes/Footer";

function Youtube(){
    return(
        <>
            <Header />
            <Contents>
                <section className="youtube__cont">
                    <div className="youtube__inner">
                        <div>Youtube</div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube;