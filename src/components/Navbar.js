import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
     <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/greet">Greetings</Link></li>
          <li><Link to="/welcome">Welcome</Link></li>
          <li><Link to="/message">Message</Link></li>
     </ul>
    </nav>
  )
}

export default Navbar