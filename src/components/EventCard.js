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
                <h3>{name}</h3>
                <p>{notes}</p>
            </div>
            <div className="event-card-buttons">
                <button onClick={() => launchEvent()}>Launch Timer</button>
                <button onClick={handleClick}>Delete Task</button>
            </div>
            <div className="event-card-goal">
                <p>{goal} Minutes</p>
            </div>
        </div>
    )
}
