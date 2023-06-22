import { useDispatch, useSelector } from "react-redux";
import { login,logout } from "../store";
import { useState } from "react"

function Login() {

  const [newName, setNewName] = useState("");

  const dispatch = useDispatch();

  const username = useSelector((state:any) => state.user.value.username)

  return (
    <div>
      <h1>This is the Login Page</h1>
      <h2>Welcome {username}</h2>
      <input type="text" style={{padding : 15}} placeholder="Enter a Name"
        onChange={e => setNewName(e.target.value)}
      />
      <button
        type="submit" onClick={() => dispatch(login({ username : newName }))}  >
        Update State
      </button>
      <button type="submit"
        onClick={() => dispatch(logout())}
      >Delete State</button>
    </div>
  );
}

export default Login;
