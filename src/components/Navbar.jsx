import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Uey Chat</span>
        <div className="user">
            <img src="" alt="" />
            <span>Luke</span>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar