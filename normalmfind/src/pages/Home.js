import React from 'react'
import Hero from '../components/Hero';

import {Link} from 'react-router-dom'

import Banner from '../components/Banner'

import Services from '../components/Services'

import FeaturedEvents from '../components/FeaturedEvents';

//homebutton


//arrow function  rafc
//this is just a function

export default function Home(){
    return ( 

        <>
    
        <Hero>
            <Banner title = "Great Events " subtitle="nearest happening now">
                <Link to='/events' className="btn-primary">
                    The eventss
                </Link>    
            </Banner>
        </Hero>

        <Services />

        <FeaturedEvents/>

        

        </>
    );   
}