// Using Objects to Modify the same application
// Exercise - 1.4
// 

const App = () => {
  const course = "Half Stack Application Development"
  const parts = [
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
 
  return (
    <div>
      <h1> {course} </h1>
      <p>
        {parts[0].name} {parts[0].exercise}
      </p>
      <p>
        {parts[1].name} {parts[1].exercise}
      </p>
      <p> 
        {parts[2].name} {parts[2].exercise}
      </p>
      <p>
        Number of exercises are {parts[0].exercise + parts[1].exercise + parts[2].exercise}
      </p>
    </div>
  )
}

export default App