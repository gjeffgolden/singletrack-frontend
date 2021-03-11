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

    const totalTime = () => {
        let timeArray = events.map(event => event.goal)
        let reducer = (accumulator, currentValue) => accumulator + currentValue
        return (timeArray.reduce(reducer) / 60).toFixed(2)
    }

    return (
        <div className="event-container">
            {events.length > 0
                ? <h4>Hours Budgeted Today: {totalTime()}</h4>
                : <h4>Hours Budgeted Today: 0</h4>
            }
            {displayEvents()}
        </div>
    )
}
