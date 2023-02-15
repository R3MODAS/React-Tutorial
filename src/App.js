import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Message from "./components/Message";

function App() {
  return (
      <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Hello />}/>

          <Route path="/greet" element={
            <>
              <Greet name="Remo">
                <div style={{ color: "aqua" }}>This is a children 1</div>
              </Greet>
              <Greet name="Harsh">
                <div style={{ color: "red" }}>This is a children 2</div>
              </Greet>
              <Greet name="Rahul" />
            </>} />

          <Route path="/welcome" element={
            <>
              <Welcome name="Remo">
                <div style={{ color: "aqua" }}>This is a children 1</div>
              </Welcome>
              <Welcome name="Harsh">
                <div style={{ color: "red" }}>This is children 2</div>
              </Welcome>
              <Welcome name="Rahul" />
            </>
          } />

          <Route path="/message" element={<Message />} />
        </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
