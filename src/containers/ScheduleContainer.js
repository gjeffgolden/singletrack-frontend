import React from 'react'
import EventContainer from './EventContainer'

export default function ScheduleContainer({ deleteEvent, selectEvent, setIsTimerActive, handleOnDragEnd }) {

    return (
        <div className="schedule-container">
            <EventContainer 
                deleteEvent={deleteEvent} 
                selectEvent={selectEvent} 
                setIsTimerActive={setIsTimerActive}
                handleOnDragEnd={handleOnDragEnd}
            >
            </EventContainer>
        </div>
    )
}
