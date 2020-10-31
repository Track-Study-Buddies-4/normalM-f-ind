import React from 'react'

import EventsFilter from './EventFilter';
import EventsList from './EventList';

import {withEventConsumer} from '../context';
import Loading from './Loading';


function EventContainer({context}){

    const {loading , sortedEvents, events} = context;

                if(loading){
                
                return <Loading/>;
            }

            return (
            <>
                
                <EventsFilter events={events} />
                <EventsList events ={sortedEvents} />
            </>
            );


}


export default withEventConsumer(EventContainer)


// import React from 'react'

// import EventsFilter from './EventFilter';
// import EventsList from './EventList';

// import {EventConsumer} from '../context';
// import Loading from './Loading';


// export default function EventContainer(){

//     return (
    
//     <EventConsumer>
//         {
//         (value) => {

//             const {loading, sortedEvents, events} = value

//             if(loading){
                
//                 return <Loading/>;
//             }

//             return (
//             <div>
//                 Hello from rooms container 
//                 <EventsFilter events={events} />
//                 <EventsList events ={sortedEvents} />
//                 </div>
//                 );
//             }

//         }
//     </EventConsumer>



//     );
// }