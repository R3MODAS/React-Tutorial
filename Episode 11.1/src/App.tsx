// import { useState } from "react";
import Person from "./components/Person";
import { City } from "./components/Person";

function App() {
  // const [name, setName] = useState<string>("")

  return (
    <>
      <Person
        name="Remo"
        age={23}
        email="abc@gmail.com"
        friends={["Harry", "Satish", "Gopal"]}
        // country = "India"
        city={City.Kanchrapara}
      />
      <Hello />
    </>
  );
}

function Hello():string {
  return "Remo"
}

export default App;
