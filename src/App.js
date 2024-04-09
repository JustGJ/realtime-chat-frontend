import { useState } from 'react';
import './App.css';
import WaitingRoom from './components/WaitingRoom';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/ChatRoom';

const App = () => {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (userName, chatRoom) => {
    try {
      // initialize a connection
      const connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7178/chat')
      .configureLogging(LogLevel.Information)
      .build();

      // set up handler
      connection.on("JoinSpecificChatRoom", (username, msg) => {
        console.log(`msg : ${msg}`);
        setMessages(messages => [...messages, { username, msg }]);

      })

      connection.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages(messages => [...messages, { username, msg }]);
      })

      await connection.start();
      await connection.invoke('JoinSpecificChatRoom', { userName, chatRoom });

      setConnection(connection);
    }
    catch(e){
      console.log(e);
    };
  };

  const sendMessage = async (msg) => {
    console.log("🚀 ~ sendMessage ~ msg:", msg)
    try {
      await connection.invoke('SendMessage', msg);
    } catch (e) {
      console.log(e);
    
    }
  }
  return (
    <div className="App">
     <h1>Chat</h1>
     {!connection
       ? <WaitingRoom joinChatRoom={joinChatRoom} />
       : <ChatRoom messages={messages} sendMessage={sendMessage} />
     }
    </div>
  );
}

export default App;
