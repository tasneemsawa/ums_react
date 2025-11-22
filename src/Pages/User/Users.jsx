import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');


const getUsers=async()=>{

  try {
    const response = await axios.get(`${import.meta.env.VITE_BURL}/users`);
    setUsers(response.data.users);
  } catch (err) {
    setIsError(err.message);
  } finally {
    setIsLoading(false);
  }

}

  useEffect(()=>{

    getUsers();

  },[])

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
        {users.map(user =>
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