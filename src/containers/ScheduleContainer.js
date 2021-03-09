import React from 'react'
import EventContainer from './EventContainer'

export default function ScheduleContainer({events, deleteEvent, selectEvent, setIsTimerActive}) {
    return (
        <div className="schedule-container">
            <p>Schedule Container</p>
            <EventContainer events={events} deleteEvent={deleteEvent} selectEvent={selectEvent} setIsTimerActive={setIsTimerActive} />
        </div>
    )
}
