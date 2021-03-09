import React from 'react'
import EventCard from '../components/EventCard'

export default function EventContainer({events, deleteEvent, selectEvent, setIsTimerActive}) {

    const displayEvents = () => {
        return events.map(event => {
            return(
                <EventCard 
                    key={event.id} 
                    id={event.id} 
                    goal={event.goal} 
                    notes={event.notes} 
                    name={event.task.name} 
                    deleteEvent={deleteEvent} 
                    selectEvent={selectEvent}
                    setIsTimerActive={setIsTimerActive} />
            )
        })
    }

    return (
        <div className="event-container">
            {displayEvents()}
        </div>
    )
}
