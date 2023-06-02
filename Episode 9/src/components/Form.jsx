import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'

function Form() {

  const schema = yup.object().shape({

    username: yup
      .string()
      .required("Please Enter your Username"),

    email: yup
      .string()
      .email()
      .required("Please Enter your Email"),

    age: yup
      .number()
      .typeError("Age must be a Number")
      .required()
      .positive()
      .integer()
      .min(18),

    password: yup
      .string()
      .required("Please Enter your Password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),

    confirmPassword: yup
      .string()
      .required("Please Confirm your Password")
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")

  })

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  // console.log(watch())
  // console.log(errors);


  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="input__field">
        <label htmlFor="username">Username</label>
        <input type="text" id='username' name='username' {...register("username")} />
        <p style={{ color: "red" }}>{errors.username?.message}</p>
      </div>

      <div className="input__field">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>

      <div className="input__field">
        <label htmlFor="age">Age</label>
        <input type="number" name='age' id='age' {...register("age")} />
        <p style={{ color: "red" }}>{errors.age?.message}</p>
      </div>

      <div className="input__field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" {...register("password")} />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
      </div>

      <div className="input__field">
        <label htmlFor="confirmpass">Confirm Password</label>
        <input type="password" name='confirmpass' id='confirmpass' {...register("confirmPassword")} />
        <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
      </div>

      <button type='submit'>Submit</button>

    </form>
  )
}

export default Form