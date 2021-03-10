import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import ReactiveButton from 'reactive-button'

export default function Timer({ setIsTimerActive, currentEvent }) {

    const [pause, setPause] = useState(true)

    return (
        <div className="timer-container">
            <div className="timer">
                <CountdownCircleTimer
                    isPlaying={pause}
                    duration={currentEvent.goal * 60}
                    size={400}
                    colors={[
                        ['#5B628F']
                    ]}
                >
                {({ remainingTime }) => {
                    const minutes = Math.floor(remainingTime / 60)
                    const seconds = remainingTime % 60
                    if (seconds < 10){
                        return `${minutes}:0${seconds}`
                        } else {
                        return `${minutes}:${seconds}`
                    }  
                }}    
                </CountdownCircleTimer>
            </div>
            <div className="timer-elements">
                <h2>{currentEvent.task.name}</h2>
                <p>{currentEvent.notes}</p>
                {pause
                    ? <ReactiveButton
                        idleText="PAUSE"
                        color="dark"
                        onClick={() => setPause(pause => !pause)}
                        width="200px"
                        style={{fontFamily: 'Maven Pro'}}
                        shadow={true}
                    />
                    : <ReactiveButton
                        idleText="RESUME"
                        color="dark"
                        width="200px"
                        onClick={() => setPause(pause => !pause)}
                        style={{fontFamily: 'Maven Pro'}}
                    />
                    
                }
                <ReactiveButton 
                    idleText="CLOSE" 
                    onClick={() => setIsTimerActive(false)}
                    color="dark"
                    width="200px"
                    shadow={true}
                    style={{marginTop: '10px', fontFamily: 'Maven Pro'}}
                />
            </div>
        </div>
    )
}
