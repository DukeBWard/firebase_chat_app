import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'

const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  // has to be async cause await getDocs
  const handleSearch = async () => {
    const q = query (collection(db, "users"), where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setUser(doc.data());
    });
    } catch (error) {
      setErr(true);
    }
    
  };

  const handleKey = e => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className='search'>
        <div className='searchForm'>
            <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}/>
        </div>
        {err && <span>User not found</span>}
        {user && <div className="userChat">
            <img src={user.photoURL} alt="" />
            <div className="userChatInfo"></div>
            <span>{user.displayName}</span>
        </div>}
    </div>
  )
}

export default Search