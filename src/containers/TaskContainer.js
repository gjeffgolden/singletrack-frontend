import React, { useState } from 'react'
import TaskCard from '../components/TaskCard'
import CreateEventForm from '../components/CreateEventForm'

export default function TaskContainer( {tasks, setEvents, events} ) {

    const [isTaskSelected, setIsTaskSelected] = useState(false)
    const [selectedTask, setSelectedTask] = useState('')
    
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
            {isTaskSelected
                ? <CreateEventForm tasks={tasks} closeForm={closeForm} selectedTask={selectedTask} />
                : displayTasks()
            }
        </div>
    )
}
