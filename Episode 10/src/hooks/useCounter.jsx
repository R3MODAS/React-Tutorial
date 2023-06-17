import { useState } from "react"


function useCounter(initialVal) {

    const [state, setState] = useState(initialVal);

    const increment = () => setState(prev => prev + 1)

    const decrement = () => setState(prev => prev - 1)


    return [state, increment, decrement]

}

export default useCounter