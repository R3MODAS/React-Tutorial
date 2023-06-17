import React from 'react'
import useToggle from '../hooks/useToggle';

function FirstUseCase() {

    const [isVisible, setIsVisible] = useToggle();

    return (
        <>
            <button onClick={setIsVisible}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <h1>Hidden Text</h1>}
        </>
    )
}

export default FirstUseCase