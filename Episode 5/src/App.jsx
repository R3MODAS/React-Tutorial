import Axios from "axios";
import { useEffect, useState } from "react"
import Exercise from "./components/Exercise";


function App() {
  const [catFact, setCatFact] = useState("");
  const [Name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const generateFact = () => {
    //  fetch("https://catfact.ninja/fact")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCatFact(data.fact);
    //   })

    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
  } 

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${Name}`).then((res) => {
      setPredictedAge(res.data);
    })
  }

  useEffect(() => {
    generateFact();
  }, []);


  return (
    <div className="wrapper">
      <button onClick={generateFact}>Generate Cat Fact</button>
       <p>{catFact}</p>

      <input type="text" placeholder="Enter a Name" style={{padding : 15}} 
      onChange={
        (e) => setName(e.target.value)}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h2>Name : {predictedAge?.name}</h2>
      <h2>Age : {predictedAge?.age}</h2>
      <h2>Count : {predictedAge?.count}</h2>

      <Exercise />
    </div>
  )
}

export default App
