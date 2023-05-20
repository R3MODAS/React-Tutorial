import React, { useState } from 'react'

function States() {
  // const [age, setAge] = useState(0);

  // const increment = () => {
  //   setAge((age) => age + 1);
  // }

  const [text, setText] = useState("");
  const handleText = (event) => {
    setText(event.target.value);
  }

  const [Show, setShow] = useState(true);
  const toggleHide = () => {
    setShow(!Show);
  }

  const [TextColor, setTextColor] = useState("white");
  const [TextRotate, setTextRotate] = useState("0deg");
  const [TextSize, setTextSize] = useState("1.6em");

  const handleChange = () => {
    setTextColor(TextColor === "white" ? "orange" : "white");
    setTextRotate(TextRotate === "0deg" ? "360deg" : "0deg");
    setTextSize(TextSize === "1.6em" ? "2.3em" : "1.6em");
  }


  return (
    <>
      {/* <h2>Age : {age}</h2> */}
      {/* <button onClick={increment}>Increment</button> */}

      <h2>{text === "" ? "Nothing to Display" : text}</h2>
      <input type="text" placeholder='Type your text here' style={{ padding: 20 }} onChange={handleText} />


      {Show && <h2>Text is here</h2>}
      <button onClick={toggleHide}>Show/Hide</button> <br /><br />

      <h2 style={{
        color: TextColor,
        rotate: TextRotate,
        fontSize: TextSize
      }}>Hi, I am Remo 🙌</h2>
      <button onClick={handleChange}>Click here</button>

    </>
  )
}

export default States