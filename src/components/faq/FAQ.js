import React from 'react';
import './faq.css'
import SimpleAccordion from './Accordion'

function FAQ(){

    return (
        <div className="faq-section">
            <div className="faq-content-container">
            <h1 className="faq-title">Dúvidas Frequentes</h1>
            <SimpleAccordion/>
            </div>
        </div>
    )
}

export default FAQ