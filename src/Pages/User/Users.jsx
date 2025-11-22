import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { Slide, toast } from 'react-toastify';

export default function Users() {

  let { data, isLoading, isError } = useFetch("users")
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
      console.log(response);
      if (response.status == 200)
        toast.success('🎉 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
          Transition: Slide
        })
    } catch (error) {
      console.log(error);
    } finally {

    }
  }
  if (isError) {
    return <div className='text-danger'>{isError}</div>
  }

  if (isLoading) {
    return <h2>wait...</h2>
  }
  return (


    <table className="table">
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>image</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {data.users.map(user =>
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><img src={user.imageUrl} width="200px" /></td>
            <td>
              <Link to={`/users/${user.id}`} className="btn btn-outline-success">details</Link>
              <button onClick={() => deleteUser(user.id)} className="btn btn-outline-danger">delete</button>

            </td>
          </tr>
        )}
      </tbody>
    </table>





  )
}


{/* {
        users.map(user =>
          <div className='user' key={user.id}>
            <h2>{user.name}</h2>
          </div>
        )
      } */}