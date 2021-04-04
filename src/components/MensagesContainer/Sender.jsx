import React, { useState } from 'react';
import send from '../../assets/img/send.svg';
const Sender = (props) => {

    const {sendMessage} = props

    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if(message !== '') {
            sendMessage(message);
            setMessage('')
        }
    }

    const handleOnChange = (event) => {
        const {target} = event
        const {value} = target
        setMessage(value)
    }

    const handleSubmit = ({keyCode}) => {
        if(keyCode === 13 && message !== '') {
            sendMessage(message);
            setMessage('')
        }
    }
    
    return (
        <div className="sender">
            <div className="input">
                <input type="text" value={message} onChange={handleOnChange} onKeyUp={handleSubmit}/>
            </div>
            <div className="control">
                <img src={send} alt="send" onClick={handleSendMessage} />
            </div>
        </div>
    )
}

export default Sender;