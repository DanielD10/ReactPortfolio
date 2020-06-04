import React from "react";
import "./style.css";

function ContactForm() {
    return (
        <form className="uk-form-stacked uk-position-relative" uk-height-viewport="expand: true">
            <div className="uk-margin">
                <label className="uk-form-label uk-text-muted">Name</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="name" type="text" placeholder="John Doe" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label uk-text-muted">Email</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="email" type="text" placeholder="johndoe@email.com" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label uk-text-muted">Email</label>
                <div className="uk-form-controls">
                    <textarea className="uk-textarea" id="message" rows="5"
                        placeholder="Your message..."></textarea>
                </div>
            </div>
            <button id="submitBtn" className="uk-button" >Submit</button>
        </form>
    );
}

export default ContactForm;