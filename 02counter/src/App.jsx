import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) // useState resonsible to change state propagates the change to the UI/DOM

  // let counter = 15
  const addValue = () => {
    // counter = counter + 1
    // if (counter > 20){
    //   counter = 20
    // }
    // setCounter(counter)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    counter = counter - 1
    if (counter < 0){
      counter = 0
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
