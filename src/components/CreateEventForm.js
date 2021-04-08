import React from 'react'

export default function CreateEventForm({ closeForm, selectedTask, tasks, events, setEvents, notes, setNotes, goal, setGoal, createEvent }) {

    const handleSubmit = () => {
        createEvent()
    }

    return (
        <div className="form-container">
            <h2>{selectedTask}</h2>
            <form className="create-event-form" onSubmit={handleSubmit}>
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
