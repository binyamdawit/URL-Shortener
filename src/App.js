import { useState } from 'react'
import './App.css'
import BackgroundAnimation from './BackgroundAnimation'
import InputShortener from './InputShortener'
import LinkedResult from './LinkedResult'

function App() {

  const [ inputValue, setInputValue ] = useState("")

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue}/>
      <BackgroundAnimation />
      <LinkedResult inputValue={inputValue} />
    </div>
  )
}

export default App
