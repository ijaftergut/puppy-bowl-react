import { useState } from 'react'
import { Link , Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import AllDogs from './AllDogs'
import SingleDog from './SingleDog'
import Homepage from './Homepage'
function App() {
  return (
    <>
      <div>
       <Nav/>
       <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/dogs' element={<AllDogs/>}/>
       <Route path='/dogs/:id' element={<SingleDog/>}/>
       </Routes> 
      </div>
      
    </>
  )
}

export default App
