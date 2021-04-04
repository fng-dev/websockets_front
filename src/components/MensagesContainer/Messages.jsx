import Message from './Message';
const Messages = (props) => {
    const {messages} = props

    return (
        <div className="messages-container">
            <div className="title">
                Koko's Chat
            </div>

            <div className="messages">
                {messages && messages.map((message, index) => (
                    <Message message={message} key={`${index}${message.message}`} />
                ))}
            </div>
        </div>
    )
}

export default Messages;