import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskContainer from './containers/TaskContainer'
import ScheduleContainer from './containers/ScheduleContainer'
import Timer from './components/Timer'

function App() {

  const [tasks, setTasks] = useState([])
  const [events, setEvents] = useState([])
  const [currentEvent, setCurrentEvent] = useState([])
  const [isTimerActive, setIsTimerActive] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(results => setTasks(results))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then(response => response.json())
      .then(results => setEvents(results))
  }, [])

  const deleteEvent = (id) => {
    let filtered = events.filter(event => event.id !== id)
    setEvents(filtered)
    fetch(`http://localhost:3000/events/${id}`, {
      method: 'DELETE'
    })
  }

  const selectEvent = (id) => {
    const foundEvent = events.find(allEvents => allEvents.id === id)
    setCurrentEvent(foundEvent)
  }

  return (
    <div className="App">
      <Header />
      {isTimerActive
        ? <Timer setIsTimerActive={setIsTimerActive} currentEvent={currentEvent} />
        : <div className="content-container">
            <TaskContainer tasks={tasks} events={events} setEvents={setEvents} />
            <ScheduleContainer 
              events={events} 
              deleteEvent={deleteEvent} 
              currentEvent={currentEvent} 
              selectEvent={selectEvent} 
              setIsTimerActive={setIsTimerActive}
            />
          </div>
      }
    </div>
  );
}

export default App;
