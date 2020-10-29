import React from "react"

import {Link} from "react-router-dom";

import defaultImg from "../images/room-1.jpeg"; 

import PropTypes from "prop-types"; 

export default function Event({event}){

    const {name, slug, images, price} = event;

    return (
    
    <article className="room">
        <div className="img-container">



            <img src={images[0] || defaultImg}  alt="single event"/>

            <div className="price-top">
            
            <h6>${price}</h6>

            <p> Experince </p>

            </div>

            <Link to={`/events/${slug}`} className="btn-primary room-link">Information</Link>

        </div>

    {/* <p className="room-info">{name}</p> */}

    </article>
    );
    
}

Event.proTypes =  {

    event:PropTypes.shape({

        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,

    })
}