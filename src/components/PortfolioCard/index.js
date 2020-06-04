import React from "react";
import "./style.css";

function PortfolioCard({ title, description, imgUrl, githubUrl, deployedUrl }) {
    return (
        <div>
            <div className="portfolioCard uk-card uk-card-default">
                <div className="uk-card-media-top">
                    <img src={imgUrl}
                        alt={title} />
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{title}</h3>
                    <p>{description}</p>
                    <a className="portfolioLink" href={githubUrl}
                        target="_blank" rel="noopener noreferrer">GITHUB</a> { deployedUrl ? (<a className="portfolioLink"
                        href={deployedUrl} target="_blank" rel="noopener noreferrer">APP</a>) : "" }
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;