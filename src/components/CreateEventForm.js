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
                <label>Notes:</label>
                <input type="text" name="notes" value={notes} onChange={(event) => setNotes(event.target.value)} />
                <label>Time Goal:</label>
                <input type="number" name="goal" value={goal} onChange={(event) => setGoal(event.target.value)} />
                <input type="submit" value="Add to Daily Goals"/>
            </form>
            <button onClick={() => closeForm()}>See Tasks</button>
        </div>
    )
}
