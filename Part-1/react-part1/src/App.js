// Using Objects to Modify the same application
// Exercise - 1.5


const App = () => {
  const course = {
    name : "Half Stack Application Development",
    parts : [
      {
        name : 'Fundamentals of React',
        exercise: 10
      },
      {
        name : 'Using props to pass data',
        exercise: 7
      },
      {
        name : 'State of a Component',
        exercise: 14
      }
    ]
  }
     
  return (
    <div>
      <h1> {course.name} </h1>
      <p>
        {course.parts[0].name} {course.parts[0].exercise}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercise}
      </p>
      <p> 
        {course.parts[2].name} {course.parts[2].exercise}
      </p>
      <p>
        Number of exercises are {course.parts[0].exercise + course.parts[1].exercise + course.parts[2].exercise}
      </p>
    </div>
  )
}

export default App