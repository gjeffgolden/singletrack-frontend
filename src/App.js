import './App.css';
import React, { useState, useEffect, createContext } from 'react'
import Timer from './components/Timer'

//containers
import TaskContainer from './containers/TaskContainer'
import ScheduleContainer from './containers/ScheduleContainer'

//components
import Header from './components/Header'

//context
export const EventsContext = createContext([])

function App() {

  const [tasks, setTasks] = useState([])
  const [events, setEvents] = useState([])
  const [currentEvent, setCurrentEvent] = useState([])
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [isTaskSelected, setIsTaskSelected] = useState(false)
  const [selectedTask, setSelectedTask] = useState('')
  const [notes, setNotes] = useState('')
  const [goal, setGoal] = useState(0)

  const url = "http://localhost:3000"

  useEffect(() => {
    fetch(`${url}/tasks`)
      .then(response => response.json())
      .then(results => setTasks(results))
  }, [])

  useEffect(() => {
    fetch(`${url}/events`)
      .then(response => response.json())
      .then(results => setEvents(results))
  }, [])

  const deleteEvent = (id) => {
    let filtered = events.filter(event => event.id !== id)
    setEvents(filtered)
    fetch(`${url}/events/${id}`, {
      method: 'DELETE'
    })
  }

  const createEvent = () => {
    const findTask = tasks.find(task => task.name === selectedTask)
    const task_id = findTask.id
    const newEvent = {task_id, goal, notes}
    fetch(`${url}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newEvent)
    })
    const optimisticallyRenderedNewEvent = {
      id: events.length, 
      task_id: newEvent.task_id, 
      goal: Number(newEvent.goal), 
      notes: newEvent.notes, 
      task: findTask
    }
    setEvents([...events, optimisticallyRenderedNewEvent])
}

  const selectEvent = (id) => {
    const foundEvent = events.find(allEvents => allEvents.id === id)
    setCurrentEvent(foundEvent)
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const [reorderedEvent] = events.splice(result.source.index, 1)
    events.splice(result.destination.index, 0, reorderedEvent)
    setEvents(events)
  }

  const onTimerEnd = () => {
    deleteEvent(currentEvent.id)
    setIsTimerActive(false)
  }

  return (
    <main className="App">
      <Header />
      {isTimerActive
        ? <Timer setIsTimerActive={setIsTimerActive} currentEvent={currentEvent} onTimerEnd={onTimerEnd} />
        : <div className="content-container">
            <TaskContainer 
              tasks={tasks} 
              createEvent={createEvent}
              isTaskSelected={isTaskSelected}
              setIsTaskSelected={setIsTaskSelected}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
              notes={notes}
              setNotes={setNotes}
              goal={goal}
              setGoal={setGoal}
            />
            <EventsContext.Provider value={events}>
              <ScheduleContainer  
                deleteEvent={deleteEvent} 
                selectEvent={selectEvent} 
                handleOnDragEnd={handleOnDragEnd}
                setIsTimerActive={setIsTimerActive}
              />
            </EventsContext.Provider>
          </div>
      }
    </main>
  );
}

export default App;
