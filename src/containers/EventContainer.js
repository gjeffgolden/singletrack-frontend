import React, { useContext } from 'react'
import EventCard from '../components/EventCard'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { EventsContext } from '../App'

export default function EventContainer({ deleteEvent, selectEvent, setIsTimerActive, handleOnDragEnd }) {

    const events = useContext(EventsContext)

    const displayEvents = () => {
        return events.map((event, index) => {
            return(
                <Draggable key={event.id} draggableId={event.id.toString()} index={index}>
                    {(provided) => (
                        <li 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <EventCard 
                                key={event.id}
                                id={event.id} 
                                goal={event.goal} 
                                notes={event.notes} 
                                name={event.task.name} 
                                deleteEvent={deleteEvent} 
                                selectEvent={selectEvent}
                                setIsTimerActive={setIsTimerActive} 
                            />
                        </li>
                    )}
                </Draggable>
            )
        })
    }

    const totalTime = () => {
        let timeArray = events.map(event => event.goal)
        let reducer = (accumulator, currentValue) => accumulator + currentValue
        return (timeArray.reduce(reducer) / 60).toFixed(2)
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="events">
                {(provided) => (
                    <ul className="event-container" {...provided.droppableProps} ref={provided.innerRef}>
                        {events.length > 0
                            ? <h4>Today's Schedule: {totalTime()} Hours</h4>
                            : <h4>Your schedule is empty.</h4>
                        }
                        {displayEvents()}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}
