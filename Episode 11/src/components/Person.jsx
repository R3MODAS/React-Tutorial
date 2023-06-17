import React from 'react'
import PropTypes from "prop-types"

function Person({name,age,email,friends}) {
  return (
    <div>
        <h2>Name : {name} </h2>
        <h2>Email : {age} </h2>
        <h2>Age : {email} </h2>
        <h2>Friends : </h2>
        {
            friends.map((friend, id) => (
                <span key={id}>{friend}, </span>
            ) )
        }
    </div>
  )
}

export default Person

Person.propTypes = {
    name : PropTypes.string,
    email : PropTypes.string,
    age : PropTypes.number,
    friends : PropTypes.arrayOf(PropTypes.string)
}