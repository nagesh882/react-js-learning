import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
    console.log("value added", counter);
  }


  const removeValue = () => {
    // counter = counter - 1
    setCounter(counter - 1)
    console.log("value removed", counter);
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
