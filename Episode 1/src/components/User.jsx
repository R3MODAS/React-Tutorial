// export const User = () => {
// const name = "Remo";
//   return (
//     <h1>Hi, I am {name} 🙌</h1>
//   )
// }

import React from 'react'

function User(props) {
    return (
        <h2>Hi, I am {props.name} and I am {props.age} years old</h2>
    )
}

export default User