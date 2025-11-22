import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';

export default function User() {
  const {id}=useParams()
  let {data,isLoading,isError} =useFetch(`users/${id}`) 

  if (isError) {
    return <div className='text-danger'>{isError}</div>
  }

  if (isLoading) {
    return <h2>wait...</h2>
  }
  console.log(data.data)
  return (
    <>
    <div>User</div>
    </>
  )
}
