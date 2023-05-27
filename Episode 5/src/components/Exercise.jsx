import Axios from "axios"
import React, { useState } from 'react'

function Exercise() {
    // const [Party, setParty] = useState(null);
    // const [Family, setFamily] = useState(null);
    // const [Gaming, setGaming] = useState(null);

    // const ExcuseParty = () => {
    //     Axios.get("https://excuser-three.vercel.app/v1/excuse/party/")
    //     .then(
    //         (res) => 
    //         { 
    //             setParty(res.data[0]) 
    //         }
    //         )
    // }

    // const ExcuseFamily = () => {
    //     Axios.get("https://excuser-three.vercel.app/v1/excuse/family/")
    //     .then(
    //         (res) => 
    //         { 
    //             setFamily(res.data[0]) 
    //         }
    //         )
    // }

    // const ExcuseGaming = () => {
    //     Axios.get("https://excuser-three.vercel.app/v1/excuse/gaming/")
    //     .then(
    //         (res) => 
    //         { 
    //             setGaming(res.data[0]) 
    //         }
    //         )
    // }

    const [Excuse, setExcuse] = useState("");

    const FetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
        .then((res) => {
            setExcuse(res.data[0].excuse);
        })
    }

  return (
    <>
        {/* <h1>Exercise</h1>
        <button onClick={ExcuseParty}>Party</button>
        <p>{Party?.excuse}</p>
        <button onClick={ExcuseFamily}>Family</button>
        <p>{Family?.excuse}</p>
        <button onClick={ExcuseGaming}>Gaming</button>
        <p>{Gaming?.excuse}</p> */}

        <button onClick={() => FetchExcuse("party")}>Party</button>
        <button onClick={() => FetchExcuse("family")}>Family</button>
        <button onClick={() => FetchExcuse("gaming")}>Gaming</button>

        <p>{Excuse}</p>
    </>
    
  )
}

export default Exercise