import React from 'react'

export default function EventCard({id, name, goal, notes, deleteEvent, setIsTimerActive, selectEvent}) {

    const handleClick = () => deleteEvent(id)
    const launchEvent = () => {
        selectEvent(id)
        setIsTimerActive(true)
    }

    return (
        <div className="event-card">
            <div className="event-card-text">
                <p>{name}</p>
                <p>{notes}</p>
                <button onClick={handleClick}>X</button>
            </div>
            <div className="event-card-goal">
                <p>{goal}</p>
                <button onClick={() => launchEvent()}>Launch Timer</button>
            </div>
        </div>
    )
}
