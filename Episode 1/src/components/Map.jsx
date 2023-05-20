import React from 'react'

function Map() {
    // const names = ["Remo", "Ram", "Shubham", "Rohit"];
    // const users = [
    //     { name: "Remo", age: 23 },
    //     { name: "Harsh", age: 26 },
    //     { name: "Shubham", age: 22 },
    // ];
    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
      ];

    return (
        <>
            {/* {names.map((name,key) => {
                return <h2 key={key}>{name}</h2>
            })} */}

            {/* {users.map((user, key) => {
                return <h2 key={key}>{user.name} is {user.age} years old</h2>
            })} */}

            {/* {users.map((user, key) => {
                return (
                    <User name={user.name} age={user.age} />
                )
            })} */}

            {planets.map((planet,key)=>{
                return (
                    // <h2 key={key}>{planet.isGasPlanet ? planet.name : ""}</h2>
                    <h2 key={key}>{planet.isGasPlanet && planet.name}</h2>
                )
            })}

        </>
    )
}


// function User(props) {
//     return (
//         <h2>{props.name} is {props.age} years old</h2>
//     )
// }



export default Map