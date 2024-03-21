import React, { useContext, useState } from 'react'
import { db } from '../firebase'
import { collection, doc, getDocs, query, where, setDoc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore'
import { AuthContext } from '../context/AuthContext'


// MAKE SURE YOURE IMPORTING ALL PROPER METHODS
// IDK WHY MY IDE WONT TELL ME WHEN THEYRE MISSING
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const {currUser} =  useContext(AuthContext);
  
  // console.log(currUser);
  // console.log(user);

  // has to be async cause await getDocs
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setUser(doc.data());
    });
    } catch (error) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // checks the group first and if not there it makes it
    const combinedId =
      currUser.uid > user.uid ? currUser.uid + user.uid : user.uid + currUser.uid;
    try {
  
      const res = await getDoc(doc(db, "chats", combinedId));
      //console.log(res)
      if (!res.exists()) {
  
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(db, "userChats", currUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currUser.uid,
            displayName: currUser.displayName,
            photoURL: currUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search