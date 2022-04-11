import React from 'react'
import Navbar from './components/Navbar'
import TodasLasFiguras from './components/TodasLasFiguras'

const App = () => {

  return (
    <div className='background'>
      <div className='div-navbar'>
        <Navbar/>
      </div>
      <h1 className='titulo'>APP</h1>
      <TodasLasFiguras/>
    </div>
  )
}

export default App
