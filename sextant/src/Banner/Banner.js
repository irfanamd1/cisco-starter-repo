import React from 'react';
import './Banner.css';

const Banner = ({ bannerText }) => {
    return (
        <div className="Banner">
            <h1>{ bannerText }</h1>
        </div>
    );
}

export default Banner;