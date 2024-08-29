import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MortgageCalculator from './components/MortgageCalculator';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MortgageCalculator />
    </>
  )
}

export default App
