# Singletrack

A time management tool for software engineering students.

Users can select from a set of pre-seeded tasks related to the bootcamp experience, such as attending a lesson, working on a lab or project, or exploring new tech. Students can then include clarifying notes and set a time goal, which adds the task to their daily schedule. From the daily schedule, they can launch a countdown timer to keep them focused on the selected task.

Note: This React frontend is meant to be paired with the [singletrack-backend repo](https://github.com/gjeffgolden/singletrack-backend) built in Rails.

## Features

1. **Drag and Drop:** One of my main goals with this Flatiron School Module 4 project was to explore drag-and-drop functionality in React. Once a task is added to a user's daily schedule, the card displaying the task details and the launch timer function can be moved around within the Daily Schedule container. Set your order of goals however you want!

2. **Circle Timer:** When a timer is launched, the entire screen changes to a circle timer displaying the details of the selected task. It counts down from the pre-set time goal, and upon completion, the user is returned to their daily schedule and the finished task is automatically deleted. There is also a pause/resume button in case life happens, which it will.

3. **Compassionate Design:** Software engineering bootcamps are intense. It's easy to stare at a screen for six hours without a break and wonder where they day went. The Singletrack timer only allows users to set goals for a maximum of 60 minutes. That's on purpose! At least once an hour, you should take a break to stretch, look around, get a drink of water, whatever. If you have a goal that will take more than one hour, simply add it as separate tasks -- part one, part two, part three. And take a breather in between! Self-Care is also one of the provided task options, so be sure to build outdoor walks, workouts, meditations, etc. into your daily schedule.

## Lessons and Challenges

1. **React in General:** I started this project with two weeks of React programming under my belt, and even that's deceiving. The first week was spent mostly learning "the old ways" before transitioning to hooks and functional components. I learned a ton on the fly while building this app, from the very basics of React such as fetch with useEffect to conditional rendering to importing and implementing third-party components. I absolutely loved learning React and plan to focus heavily on it for my upcoming Flatiron School capstone project, where I'll also bring in more advanced tools such as Redux and Router.

2. **Implementing Outside Components:** The basic functionality behind react-beautiful-dnd was fairly easy to grasp. Taking those components and concepts and adding them to my existing project, however, was a valuable learning exercise. Figuring out which wrappers needed to go on which containers, and where props needed to be passed, took about half a day. I first had the "drag" function working with a broken "drop" function, and then I broke the "drag" when I fixed the "drop." It took a lot of trial-and-error and Google-fu, but by setting small achievable debugging goals I was eventually able to get everything working.

```
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
```

3. **Time Gymnastics:** Working with a clock was difficult. The react-circular-countdown by default shows time in the 15:00 format, but when the seconds dipped below 10 it would display as 15:1. I had to add a conditional render to include the extra zero for cases such as 15:01. I also wanted to have a "total time budgeted" function so a user could see how many hours of tasks they'd planned for a given day. This was a particularly fun feature to add, as I got to use a real-world .reduce in JavaScript! I got comfortable with .reduce in Ruby/Rails, but haven't had many use cases for it while learning JavaScript. Once the total time in minutes was accumulated, I divided by 60 and used the .toFixed() function to render the time in hours without an insane amount of decimal places.

```
    const totalTime = () => {
        let timeArray = events.map(event => event.goal)
        let reducer = (accumulator, currentValue) => accumulator + currentValue
        return (timeArray.reduce(reducer) / 60).toFixed(2)
    }
```

## Future Goals

1. Add user authentication for potential deployment.
2. Edit the time goal on an existing task on the daily schedule.
3. If a user exits the timer before it's complete, the remaining time is set as the new time goal and persists on the backend. That way a timer can be exited and reopened without resetting the time back to start.
4. Progress bars that show the time per day dedicated to each task type.
5. A gong or other sound that plays when a timer completes, in case a user has it running in the background.

## Gratitude

I couldn't have completed this project without two amazing React components: [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) and [react-countdown-circle-timer](https://www.npmjs.com/package/react-countdown-circle-timer). Huge thanks to the developers who create such awesome tools, as well as those who provide online tutorials and walkthroughs about real-world use cases.
