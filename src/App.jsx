import React from "react"
import Home from "./pages/home/Home"
import MyRoute from "./myRoute/MyRoute"
import NavLink from "./components/myNavLink/MyNavLink"
import Projects from "./components/projects/Projects"
import Loading from "./pages/landingpage/Loading"


const App = () => {
  return (
    <div>
      <NavLink></NavLink>
      <MyRoute></MyRoute>
      
    </div>
  )
}

export default App
