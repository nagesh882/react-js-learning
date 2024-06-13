import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(5)

  // let counter = 5

  // const addValue = () => {
  //   // counter = counter + 1;
  //   setCounter(counter + 1)
  //   console.log("value added", counter);
  // }


  // const removeValue = () => {
  //   // counter = counter - 1
  //   setCounter(counter - 1)
  //   console.log("value removed", counter);
  // }



  
  // Assignment
  // when counter reached 20 then it not be added
  // when counter reached 0 then it not be less than 0 or minus value

  const addValue = () => {

    if (counter < 20) {
      const newCounter = counter + 1;
      setCounter(newCounter);
      console.log("Couter value", newCounter);
    } else {
      console.log("Counter reached 20");
    }

  }


  const removeValue = () => {

    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      console.log("Removed couter", newCounter)
    } else {
      console.log("Couter value is less than 0")
    }
  }



  return (
    <>
      <h1>Hello React js</h1>
      <h2>counter value: {counter} </h2>

      <button
      onClick={addValue}
      >Add vlaue {counter}</button>

      <br />
      
      <button
      onClick={removeValue}
      >remove vlaue {counter}</button>
    </>
  )
}

export default App
