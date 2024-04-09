import React, { useState } from 'react'

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState('')

  const handleSendMessage = e => {
    e.preventDefault()
    sendMessage(message)
    setMessage('')
  }
  return (
    <form>
        <input placeholder='message' onChange={(e) => setMessage(e.target.value)} value={message}></input>
        <button type='submit' onClick={handleSendMessage}>Envoyer</button>
    </form>
  )
}

export default SendMessageForm