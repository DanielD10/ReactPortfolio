import React from "react";
import "./style.css";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <div className="container">
            <h2 className="uk-text-center">Contact</h2>
            <div className="contactWrapper uk-child-width-1-2@m" uk-grid="true">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;