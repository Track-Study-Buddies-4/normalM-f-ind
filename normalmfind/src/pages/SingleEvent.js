import React, { Component   } from 'react';

import deafultBcg from '../images/room-1.jpeg'

import Hero from '../components/Hero'

import Banner from '../components/Banner'

import {Link} from 'react-router-dom'

import {EventContext} from '../context'


import StyledHero from '../components/StyledHero'

//class component

export default class SingleEvent extends

Component {

    constructor(props){
        super(props);

        //console.log(this.props);

        this.state = {
            slug:this.props.match.params.slug,
            deafultBcg
        };
    }

    static contextType = EventContext;

    

    //componentDidMount(){}

    render(){

        const {getEvent} = this.context;
        const event = getEvent(this.state.slug);

        if(!event){

            return <div className="error">
                <h3>no such event could be found </h3>


                <Link to='/events' className="btn-primary">
                back to events 
            </Link>
            </div>

        }

        const {name, description, capaciy, size, price, extras, breakfast, pets, images} = event

        const[mainImg, ...defaultImg] = images;

        console.log(defaultImg);

        return (
        <>
        
        {/* images[0] */}
     
        <StyledHero img= { mainImg|| this.state.deafultBcg}>

            <Banner title={`${name} event`}>
 
                <Link to='/events' className='btn-primary '> Back to events :) </Link>
            </Banner>
        </StyledHero>

        <section  className="single-room">

            <div className="single-room-images" >

            {/* images */}
            {defaultImg.map((item, index) => {

              return  <img key={index} src={item} alt={name} />
    })}
            
            </div>
        </section>

        </>
        );


        
    }
}