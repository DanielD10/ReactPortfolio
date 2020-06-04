import React from "react";
import "./style.css";

function ContactInfo() {
    return (
        <div className="contactInfo uk-flex uk-flex-column uk-margin-bottom">
            <span className="contactLabel uk-text-muted uk-form-label">Email</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: mail"></span>DanielDuran1024.com</span>
            <span className="contactLabel uk-text-muted uk-form-label">Phone</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: phone"></span>210.317.8732</span>
            <span className="contactLabel uk-text-muted uk-form-label">LinkedIn</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: linkedin"></span><a href="https://www.linkedin.com/in/danielduran10/"
                    target="_blank" rel="noopener noreferrer">linkedin.com/in/danielduran10t</a></span>
            <span className="contactLabel uk-text-muted uk-form-label">GitHub</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: github"></span><a href="https://github.com/DanielD10"
                    target="_blank" rel="noopener noreferrer">github.com/DanielD10</a></span>
            <hr className="uk-divider-small" />
        </div>
    );
}

export default ContactInfo;