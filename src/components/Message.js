import React, { Component } from 'react'

class Message extends Component {

     // super() method is required becoz we extend reacts component class and a call has to be made to the base class constructor

     // state is an object that is privately maintained inside a component,
     // state can influence what is rendered in the browser
     // state can be changed within the component
     // setState method is used to set the state in a class component
     
     constructor() {
          super()
          this.state = {
               message: 'Welcome Visitor'
          }
     }

     changeMessage() {
          this.setState({
               message: 'Thank you for visiting this Website'
          })
     }


     render() {
          return (
               <>
                    <h1>{this.state.message}</h1>
                    <button onClick={() => this.changeMessage()}>Click me</button>
               </>
          )
     }
}

export default Message