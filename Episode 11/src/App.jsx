import Person from "./components/Person"

function App() {

  return (
    <>
      <Person
        name = "Remo"
        age = {23}
        email = "abc@gmail.com"
        friends = {["Harry", "Satish", "Gopal"]}
      />
    </>
  )
}

export default App
