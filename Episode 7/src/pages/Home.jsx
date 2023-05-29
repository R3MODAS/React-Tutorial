import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Home() {
    const {Username} = useContext(AppContext);

    return (
        <>

            <h1>This is our HomePage and the User is {Username}</h1>

        </>
    )
}

export default Home