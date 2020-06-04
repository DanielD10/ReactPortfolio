import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import resumePdf from "../../assets/images/danielDuranResume.pdf";

function HeadingText() {
    return (
        <div>
            <div className="uk-tile headingText uk-text-left" uk-height-viewport="expand: true">
                <div className="greeting">Hello! I'm <span>Daniel</span>.</div>
                <p className="subHeading">Front-End Web Developer</p>
                <button className="ctaBtn uk-button uk-button-default uk-margin">
                    <Link to={resumePdf} target="_blank">Resume</Link>
                </button>
            </div>
        </div>
    );
}

export default HeadingText;