import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import NewsPage2 from './components/NewsPage'
import Notfound from './components/Notfound'
import Screen from './components/Screen'
import Signup from './components/Signup'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Screen />} />
      <Route path='*' element={<Notfound/>} />
      <Route path='/pages' element={<NewsPage2/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>


  )
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp
