import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Timer({ setIsTimerActive, currentEvent }) {

    const [pause, setPause] = useState(true)

    return (
        <div className="timer-container">
            <CountdownCircleTimer
                isPlaying={pause}
                ariaLabel={"Yoooooo"}
                duration={currentEvent.goal * 60}
                size={250}
                colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                ]}
            >
            {({ remainingTime }) => {
                const minutes = Math.floor(remainingTime / 60)
                const seconds = remainingTime % 60
                return `${minutes}:${seconds}`}
            }    
            </CountdownCircleTimer>
            <p>Time Remaining</p>
            <p>{currentEvent.task.name}</p>
            <p>{currentEvent.notes}</p>
            <button onClick={() => setIsTimerActive(false)}>Close Timer</button>
            {pause
                ? <button onClick={() => setPause(pause => !pause)}>Pause Timer</button>
                : <button onClick={() => setPause(pause => !pause)}>Resume Timer</button>
            }
        </div>
    )
}
