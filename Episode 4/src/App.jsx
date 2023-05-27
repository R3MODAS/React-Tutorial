import { useState } from "react"
import Text from "./Text"

function App() {
  const [ShowText, setShowText] = useState(false);

  return (
    <>
      <div className="App">
        <button 
        onClick={
          () => 
          setShowText(!ShowText)
        }>
          Show Text</button>

        {ShowText && <Text />}
        
      </div>
    </>
  )
}

export default App
