import React, { useEffect, useState } from "react";
import "./style.css";
import PortfolioCard from "../components/PortfolioCard";
import API from "../utils/API";

function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.getProjects()
            .then(res => setProjects(res))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container">
            <h2 className="uk-text-center">Portfolio</h2>
            <div
                className="uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1"
                uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300"
                uk-grid="true"
            >
                {
                    projects.map(project => (
                        <PortfolioCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            githubUrl={project.githubUrl}
                            deployedUrl={project.deployedUrl}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Portfolio;