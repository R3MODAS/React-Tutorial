import React from "react";

// function Greet(){
//     return <h1>Hello Remo!!!</h1>
// }

const Greet = (props) => {
      console.log(props);
return(
      <>
            <h1>Greetings {props.name}</h1>
            <div>{props.children}</div>
      </>
      )
}

export default Greet