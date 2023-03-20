import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
   const [timer, setTimer] = useState(5);
   useEffect(() => {
      setTimeout(() => {
         setTimer(timer - 1);
      }, 1000)
   }, [timer])

   const navigate = useNavigate();
   useEffect(() => {
      setTimeout(() => {
         navigate(-1)
      }, 5000)
   }, [])

  return (
    <>
    <h1>Page not found</h1>
    <h2>Redirecting in {timer}</h2></>
  )
}
