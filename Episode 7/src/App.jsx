import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { useState } from "react";
import { AppContext } from "./context/AppContext";


function App() {
  const [Username, setUsername] = useState("Remo");

  return (
    <>
      <AppContext.Provider value={{Username, setUsername}}>
        
        <Router>
          <nav style={{ backgroundColor: "white", padding: 15 }}>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </nav>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>

      </AppContext.Provider>
    </>
  )
}

export default App
