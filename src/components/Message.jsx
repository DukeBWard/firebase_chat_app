import React from 'react'

const Message = ({message}) => {
  console.log(message)

  return (
    <div className='message owner'>
        <div className="messageInfo">
            <img src="" alt="" />
            <span>now</span>
        </div>
        <div className="messageContent">
            <p>bonjour</p>
            {/* <img src="" alt="" /> */}
        </div>
    </div>
  )
}

export default Message