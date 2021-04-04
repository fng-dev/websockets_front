import React from 'react';
import Messages from './Messages';
import Sender from './Sender';

const MessagesContainer = (props) => {
 const {messages, sendMessage} = props

 return (
    <div className="chat">
        <Messages messages={messages} />
        <Sender sendMessage={sendMessage} />
    </div>
 )
}

export default MessagesContainer;