import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context'
import { Link, useHistory } from "react-router-dom";


export default function Home() {

  const{userData,setUserData} = useContext(UserContext)

  const handleLogout =()=> {
    setUserData(null)
    history.push('/')
  }

  const history = useHistory()

  useEffect(() =>{

    if(!userData) history.push('/')

  })
  return (
    <>
    
    
    <div>Home</div>
    <button onClick={handleLogout}>Log out</button>
    <Link to="/profile">Profile</Link>
    </>
  )
}
