import React, { useState } from 'react'

const WaitingRoom = ({ joinChatRoom }) => {
  const [userName, setUserName] = useState('');
  const [chatRoom, setChatRoom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    joinChatRoom(userName, chatRoom);
  }

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  }

  const handleChangeRoom = (e) => {
    setChatRoom(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='prénom' onChange={handleChangeUsername}></input>
        <input placeholder='salon' onChange={handleChangeRoom}></input>

        <button type='submit'>Rejoindre le salon</button>
    </form>
  )
}

export default WaitingRoom