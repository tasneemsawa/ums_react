import { useState } from 'react'
import React from 'react'
import { useForm } from "react-hook-form"

export default function AddUser() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const addUser = (test) => {
    console.log(test);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(addUser)}>
        <div className="form-floating mb-3">
          <input {...register('name')} type="text" className="form-control" id="floatingInput" placeholder="enter" />
          <label htmlFor="floatingInput">user Name</label>
        </div>
        <div className="form-floating mb-3">
          <input {...register('email')} type="email" className="form-control" id="floatingInput" placeholder="enter" />
          <label htmlFor="floatingInput">user Email</label>
        </div>
        <div className="form-floating mb-3">
          <input {...register('age')} type="text" className="form-control" id="floatingInput" placeholder="enter" />
          <label htmlFor="floatingInput">user age</label>
        </div>
        <button className="btn btn-outline-info">Add User</button>
      </form>
    </div>
  )
}
