
import Hoot from "../hoot/Hoot";
import Navbar from "../navbar/Navbar";
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
    <div> 
    <div className="d-flex pt-4">
      <Navbar />
      <div>
        <Hoot />
      </div>
      <button onClick={handleLogout}>Log out</button>
    
    </div>
    </div>
  );
}