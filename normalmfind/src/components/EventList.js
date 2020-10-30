import React from 'react'
import Events from '../pages/Events'

import Event from './Event'

export default function EventList({events}){

    if(events.length === 0){
        return (
            <div className="empty-search">

                <h3> For the moment no places that we have found</h3>

            </div>
        )
    }



    return (


        <section className="roomslist" >

            <div className="roomslist-center">

                {events.map(item => {

                    return <Event key = { item.id } event={item} />;
                })}

            </div>
        </section>
    )
}