import React,{ useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './Stores/slicer'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Registration from './components/Registration/registration'
import Login from './components/LogIn/login'
import Home from './components/Home/home'
function App() {
  // const [loading, setLoading] = useState(true)
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   authService.getCurrentUser()
  //   .then((userData) => {
  //       if(userData){
  //         dispatch(login({userData}))
  //       }
  //       else{
  //         dispatch(logout())
  //       }
  //   })
  //   .finally(() => {
  //       setLoading(false)
  //   })

  // },[])
  return (
    <>
      <div className='main'>
        <Routes>
          <Route path='/' element = {<Registration />}></Route>
          <Route path='/login' element = {<Login />}></Route>
          <Route path='/home' element = {<Home />}></Route>
        </Routes> 
      </div>
    </>
  )
}

export default App
