import React from 'react'

export default function TaskCard({ name, openForm, setSelectedTask }) {

    const handleClick = (event) => {
        setSelectedTask(event.target.innerText)
        openForm()
    }

    return (
        <article className="task-card-front" onClick={handleClick}>
            <h4>{name}</h4>
        </article>
    )
}
