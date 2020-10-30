import React, {Component} from 'react';
import Title from './Title'

import {FaStore, FaMap, FaRegComments} from 'react-icons/fa';  

export default class Services extends Component {

    state = {

        services: [
            {
                icon: <FaStore/>,
                title: "Stores",
                info: 'Local business for people to the people'

            },

            {
                icon: <FaMap/>,
                title: "Locate",
                info: 'Discover the best places to support in this new normal'

            },
            {
                icon: <FaRegComments/>,
                title: "Comment about this",
                info: 'Share your opinions and toughts with the world'

            },
        ]

    }

    render(){
        return (

            <section className="services">
                <Title title="Services" />

                <div className="services-center">

                    { this.state.services.map((item, index) =>{

                        return <article key={index} className="service"> 
                        
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                        </article>
                    })}

                </div>

               
            </section>
        )
    }
}