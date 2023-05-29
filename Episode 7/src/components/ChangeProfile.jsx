import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';


function ChangeProfile() {
    const [newUsername, setNewUsername] = useState("");
    const {setUsername} = useContext(AppContext);

  return (
    <div>
        <input type="text" style={{padding : 15}} 
            onChange={(e) => setNewUsername(e.target.value)}
        />
        <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  )
 }

export default ChangeProfile