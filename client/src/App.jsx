import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/commonpages/Homepage'
import LoginUser from './components/pages/userpages/LoginUser'
import RegisterUser from './components/pages/userpages/RegisterUser'
import TutorDashboard from './components/pages/Tutorpages/TutorDashboard'
import Dashboard from './components/pages/Tutorpages/Dashboard'
import AllClasses from './components/pages/Tutorpages/AllClasses'
import CreateclassForm from './components/pages/Tutorpages/CreateclassForm'
import LiveClass from './components/pages/Tutorpages/LiveClass'
import ClassDashboard from './components/pages/Tutorpages/ClassDashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<LoginUser/>} />
        <Route path='/register' element={<RegisterUser/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/all-classes' element={<AllClasses/>} />
        <Route path='/create-class' element={<CreateclassForm/>} />
        <Route path='/live-class/:roomId' element={<LiveClass/>} />
        <Route path='/live-class-dashboard/:roomId' element={<ClassDashboard/>} />


        <Route path='/tutor-dashboard' element={<TutorDashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
