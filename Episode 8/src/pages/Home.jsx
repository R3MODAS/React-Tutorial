import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from "axios";

function Home() {

    const {data ,isError, refetch} = useQuery(["cat"], async() => {
        return await Axios.get("https://catfact.ninja/fact").then((res) => res.data.fact )
    })

    // if(isLoading) {
    //     return <h1>Loading....</h1>
    // } 

    if(isError){
        return <h1 style={{color : "red"}}>Error...</h1>
    }

    return (
        <div className='Home'>

            <h1>This is our HomePage</h1>
            <p>{data}</p>
            <button onClick={refetch}>Update Data</button>

        </div>
    )
}

export default Home