import React from 'react'
import Messages from './Messages'
import SendMessageForm from './SendMessageForm'

const ChatRoom = ({ messages, sendMessage }) => {
  return (
    <>
        <h2>Chat Room</h2>
        <Messages messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </>
  )
}

export default ChatRoom