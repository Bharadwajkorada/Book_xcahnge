import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Question from './components/Question'
import Books from './components/Books'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Description from './components/Description'
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  // const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar/><Welcome/><Question/></>
  //   },
  //   {
  //     path: "/login",
  //     element: <><Login/></>
  //   },
  //   {
  //     path: "/SignUp",
  //     element: <><SignUp/></>
  //   },
  // ])
  return (
    <div>
      {/* <RouterProvider router={routes}/> */}
      <Routes>
        <Route path="/" element={<><Navbar/><Welcome/><Question/></>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </div>
  )
}

export default App