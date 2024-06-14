import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  let myObj = {
    username: "yash",
    age: 21
  }

  let newArray = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-md p-4 mb-4'>Tailwind Test</h1>
      <br />

      <Card username="chaiAurCode" btnText="visit me" />
      <br />
      <Card username="loveCoding" btnText="click me" />

    </>
  )
}

export default App
