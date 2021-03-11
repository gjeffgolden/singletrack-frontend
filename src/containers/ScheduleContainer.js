import React from 'react'
import EventContainer from './EventContainer'

export default function ScheduleContainer({events, deleteEvent, selectEvent, setEvents, setIsTimerActive, handleOnDragEnd}) {

    return (
        <div className="schedule-container">
            <EventContainer 
                events={events} 
                setEvents={setEvents}
                deleteEvent={deleteEvent} 
                selectEvent={selectEvent} 
                setIsTimerActive={setIsTimerActive}
                handleOnDragEnd={handleOnDragEnd}
            >
            </EventContainer>
        </div>
    )
}
