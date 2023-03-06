import { useState } from "react";

const Display = ({counter}) => <div> {counter} </div>

const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button> 



const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log("Rendering with counter value...", counter);

  const increaseByOne = () => {
    console.log("Increasing value before...", counter);
    setCounter(counter + 1) 
  }

  const decreaseByOne = () => {
    console.log("Decreasing value before...", counter);
    setCounter(counter - 1)
  }
  
  const setToZero = () => {
    console.log("Resetting to zero before....", counter);
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text = "Plus" />
      <Button handleClick={setToZero} text="Zero" />
      <Button handleClick={decreaseByOne} text="Minus" />
    </div>
  )
}

export default App