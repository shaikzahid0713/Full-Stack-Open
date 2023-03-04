// Using Objects to Modify the same application

const App = () => {
  const course = "Half Stack Application Development"
  const part1 = {
    name : 'Fundamentals of React',
    exercise: 10
  }
  const part2 = {
    name : 'Using props to pass data',
    exercise: 7
  }
  const part3 = {
    name : 'State of a Component',
    exercise: 14
  }
  
  return (
    <div>
      <h1> {course} </h1>
      <p>
        {part1.name} {part1.exercise}
      </p>
      <p>
        {part2.name} {part2.exercise}
      </p>
      <p> 
        {part3.name} {part3.exercise}
      </p>
      <p>
        Number of exercises are {part1.exercise + part2.exercise + part3.exercise}
      </p>
    </div>
  )
}

export default App