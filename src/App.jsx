import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Morgage from '../src/components/Morgage.jsx';
import './styles/morgage.module.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Morgage />
    </>
  )
}

export default App
