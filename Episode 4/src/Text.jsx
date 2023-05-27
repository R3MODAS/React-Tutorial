import React, { useEffect, useState } from 'react'

function Text() {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    console.count("Component Mounted :")

    return () => {
      console.count("Component Unmounted")
    };
  }, [])

  return (
    <div className='Text'>
      <h1>This works !!!</h1>
      <input type="text" placeholder='Enter the Text' style={{ padding: 15 }}
        onChange=
        {
          (e) => {
            setInputText(e.target.value)
        }}
        value={inputText} />
      <h2>{inputText === "" ? "Nothing to Display" : inputText}</h2>
    </div>
  )
}

export default Text