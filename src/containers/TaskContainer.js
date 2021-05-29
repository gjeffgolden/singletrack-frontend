import React from 'react'
import TaskCard from '../components/TaskCard'
import CreateEventForm from '../components/CreateEventForm'

export default function TaskContainer({ tasks, setEvents, events, isTaskSelected, setIsTaskSelected, selectedTask, setSelectedTask, notes, setNotes, goal, setGoal, createEvent }) {
    
    const closeForm = () => {
        setIsTaskSelected(false)
    }

    const openForm = () => {
        setIsTaskSelected(true)
    }

    const displayTasks = () => {
        return tasks.map(task => {
            return <TaskCard key={task.id} name={task.name} description={task.description} openForm={openForm} setSelectedTask={setSelectedTask} />
        })
    }

    return (
        <div className="task-container">
            <h2>Choose a Task</h2>
            {isTaskSelected
                ? <CreateEventForm 
                    closeForm={closeForm} 
                    selectedTask={selectedTask} 
                    goal={goal} 
                    setGoal={setGoal} 
                    notes={notes} 
                    setNotes={setNotes} 
                    createEvent={createEvent} 
                />
                : displayTasks()
            }
        </div>
    )
}
