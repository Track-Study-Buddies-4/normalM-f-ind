import React, {Component} from 'react';

//contenful files
import items from './data'

const EventContext = React.createContext();


export default class EventProvider extends  Component {

    state = {

        events: [],
        sortedEvents: [],
        featuredEvents:[],
        loading: true

    };

    // getDAta


    componentDidMount(){

        //this.getData

        let events = this.formatData(items);
        let featuredEvents  = events.filter(event => event.featured === true);
        this.setState({
            events, 
            featuredEvents, 
            sortedEvents:events, 
            loading:false
        })

    }

    formatData(items){
        let tempItems = items.map(item =>{

            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let event = {...item.fields, images, id};

            return event;

           
        });

        return tempItems;

        
    }

    getEvent = slug  => {

        let tempEvents = [...this.state.events];
        const event = tempEvents.find(event => event.slug === slug);

        return event;


    };


    render(){



        return (<EventContext.Provider value={{...this.state, getEvent: this.getEvent}}>

            {this.props.children}
        </EventContext.Provider>
        
        );
    }
}

const EventConsumer = EventContext.Consumer;

export {EventProvider, EventConsumer, EventContext}
