import React, { useContext } from 'react'
import ChangeProfile from '../components/ChangeProfile'
import {AppContext} from "../context/AppContext";


function Profile() {
  const {Username} = useContext(AppContext);

  return (
    <>
      <h1>This is the Profile Page and the User is {Username}</h1>
      <ChangeProfile />
    </>
  )
}

export default Profile