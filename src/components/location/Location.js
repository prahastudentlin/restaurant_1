import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.0587156972471!2d14.420316477844908!3d50.08188946876172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ee0000a387%3A0x9acc3cbb4da761d4!2sMcDonald&#39;s!5e0!3m2!1sen!2scz!4v1546873491596"
                width="100%" 
                height="450" 
                frameBorder="0"
                allowFullScreen
            >
            </iframe>

        </div>
    );
};

export default Location;