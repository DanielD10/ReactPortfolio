import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer id="footer">
            <div className="uk-contianer uk-flex uk-flex-column uk-flex-middle">
                <hr className="uk-divider-small divider" />
                <div>
                    <a href="https://github.com/DanielD10" target="_blank" rel="noopener noreferrer"><span uk-icon="icon: github" className="uk-icon socialLink"></span></a>
                    <a href="https://www.linkedin.com/in/danielduran10/" target="_blank" rel="noopener noreferrer"><span uk-icon="icon: linkedin" className="uk-icon socialLink"></span></a>
                </div>
                <p className="uk-text-small">© 2020 Daniel Duran</p>
            </div>
        </footer>
    );
}

export default Footer;