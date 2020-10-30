import React from 'react'

import Hero from '../components/Hero'

import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

import EventContainer from '../components/EventContainer';



//functional components boths

  const Events = () => {

    return (
    
    <>
    <Hero hero="roomsHero" >

      <Banner title="Our Events">
        <Link to="/" className="btn-primary">
          Return home       
        </Link>
      </Banner>
    </Hero>

    <EventContainer></EventContainer>
    </>
    );   
};

export default Events;