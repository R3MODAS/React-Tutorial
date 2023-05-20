import React, { useState } from 'react'

function Ternary() {
    const age = 17;
    const name = "Remo";
    const [isRed, setToggle] = useState(true);
    const showBtn = false;

  return (
    <>
        {age >= 18 ? <h2>I am over 18</h2> : <h2>I am under 18</h2>}
        <h2 style=
        {{
          color : isRed ? "red" : "orange"
        }}>{name}</h2>
        <button onClick={()=> {setToggle(!isRed)}}>True/False Converter</button><br /><br />
        {showBtn && <button>Click me</button>}
    </>
  )
}

export default Ternary