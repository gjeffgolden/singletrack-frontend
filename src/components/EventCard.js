import React from 'react'

export default function EventCard({ id, name, goal, notes, deleteEvent, setIsTimerActive, selectEvent }) {

    const handleClick = () => deleteEvent(id)
    const launchEvent = () => {
        selectEvent(id)
        setIsTimerActive(true)
    }

    return (
        <article className="event-card">
            <section className="event-card-text">
                <h3>{name}</h3>
                <p>{notes}</p>
            </section>
            <nav className="event-card-buttons">
                <button onClick={() => launchEvent()}>Launch Timer</button>
                <button onClick={handleClick}>Delete Task</button>
            </nav>
            <div className="event-card-goal">
                <p>{goal} Minutes</p>
            </div>
        </article>
    )
}
