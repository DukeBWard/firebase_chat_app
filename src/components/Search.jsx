import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type="text" placeholder='Find a user'/>
        </div>
        <div className="userChat">
            <img src="" alt="" />
            <div className="userChatInfo"></div>
            <span>Jimmy</span>
        </div>
    </div>
  )
}

export default Search