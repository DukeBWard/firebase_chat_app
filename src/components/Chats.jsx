import React, { useEffect, useState, useContext } from 'react'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
    // there are called use state hooks
    // this is the state update function
    // when you call setChats, React will re-render the component w/ new values
    const[chats, setChats] = useState([]);

    const {currUser} =  useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
    
    //useeffect is another react hook that allows you to do side efefcts in func components
    //these are effects that happen outside of the scope of the component such as data fetching, subscriptions
    //or changing the dom
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currUser.uid), (doc) => {
                setChats(doc.data());
            });
    
            return () => { unsub(); };
        };
        currUser.uid && getChats();
    }, [currUser.uid]);
    
    console.log(Object.entries(chats));

    const handleSelect = (user) => {
        dispatch({type: "CHANGE_USER", payload: user});
    }

    // the ? in the map function checks for undefined/null
    return (
    <div className='chats'>
        {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map(chat=>(
        <div className="userChat" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].lastMessage?.text}</p>
            </div>
        </div>
        ))}
    </div>
    )
}

export default Chats