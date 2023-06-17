import React, { useState } from 'react'

function useToggle(initialVal = false) {

    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState((prev) => !prev)
    }

    return [state, toggle];

}

export default useToggle