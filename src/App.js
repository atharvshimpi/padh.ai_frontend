import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'

import Home from './containers/Home/Home'
import Login from './containers/Auth/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </Router>
  )
}

export default App