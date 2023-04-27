import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Profile } from "./pages/profile"
import { BrowserRouter,Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/profile/:userId' element={<Profile/>}></Route>
        </Routes>
        </BrowserRouter>
      
      
      </div>
     
    </>
  )
}

export default App
