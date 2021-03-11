import React, { useState } from 'react'

export default function CreateEventForm({closeForm, selectedTask, tasks}) {

    const [notes, setNotes] = useState('')
    const [goal, setGoal] = useState(0)

    const createEvent = () => {
        const findTask = tasks.find(task => task.name === selectedTask)
        const task_id = findTask.id
        const newEvent = {task_id, goal, notes}
        fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
    }


    return (
        <div className="form-container">
            <h2>{selectedTask}</h2>
            <form className="create-event-form" onSubmit={() => createEvent()}>
                {notes.length > 30
                    ? <p style={{color: 'red', alignSelf: 'center'}}>Max Characters Exceeded: 30</p>
                    : null
                }
                <label>Notes:</label>
                <input id="form-notes" type="text" name="notes" value={notes} onChange={(event) => setNotes(event.target.value)} />
                <label>Time Goal:</label>
                <input id="form-number" type="number" min="1" max="60" name="goal" value={goal} onChange={(event) => setGoal(event.target.value)} />
                <input id="submit-form-button" type="submit" value="Add to Daily Goals"/>
            </form>
            <button id="close-form-button" onClick={() => closeForm()}>Go Back</button>
        </div>
    )
}
