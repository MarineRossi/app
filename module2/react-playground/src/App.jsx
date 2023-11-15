import { useState } from 'react'
import './App.css'
import MycContent from './components/MyContent'
import { Header } from './components/Header'
import { User } from './components/User'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header title = "Hello react"/>
      <User firstName ="Alice" surname = "Smith" age={30}/>
      <User firstName ="Bob" surname ="Brown" age={30}/>
      <User firstName="Charly" surname ="baby" age={30}/>
      <Footer/>
    </>
  )
}

export default App
