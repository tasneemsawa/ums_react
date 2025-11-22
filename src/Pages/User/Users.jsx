import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import useFetch from '../../Hooks/useFetch';

export default function Users() {

 let {data,isLoading,isError} =useFetch("users") 

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
            <td></td>
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