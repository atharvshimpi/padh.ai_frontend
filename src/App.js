import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'

import Home from './containers/Home/Home'
import Login from './containers/Auth/Login'
import Profile from './containers/User/Profile'
import NotFound from './components/Error/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/user/:id' element={ <Profile /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export default App