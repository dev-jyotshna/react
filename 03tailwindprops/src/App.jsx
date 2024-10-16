import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "learnReact",
    age: 22
  }

  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>Tailwind text</h1>
      <Card username="learn" readTime="10"/>
      <Card username="Recat" readTime="19"/>
      <Card username="defaukt"/>
    </>
  )
}

export default App
