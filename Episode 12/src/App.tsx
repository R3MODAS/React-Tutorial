import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import { Provider } from "react-redux"
import store from "./store"

function App() {

  return (

    <Provider store={store}>
    <Router>
        <Navbar />

        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/contact" element = {<Contact />} />
        </Routes>
    </Router>
    </Provider>
  )
}

export default App
