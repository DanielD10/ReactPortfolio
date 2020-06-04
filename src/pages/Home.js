import React from "react";
import Image from "../components/Image";
import HeadingText from "../components/HeadingText";
import About from "../components/About";
import "./style.css";

function Home() {
    return (
        <div className="container">
            <div className="uk-child-width-expand@m uk-text-center uk-grid-collapse" uk-grid="true">
                <HeadingText />
                <Image />
            </div>
            <About />
        </div>
    );
}

export default Home;