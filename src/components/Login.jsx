import React from 'react'
import { json } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      {JSON.stringify(process.env.VITE_REACT_API_KEY)}
    </div>
  )
}

export default Login
