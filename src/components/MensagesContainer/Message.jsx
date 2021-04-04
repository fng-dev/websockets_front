import avatar from '../../assets/img/avatar.png';


const Message = (props) => {
    const { message } = props
    return (
        <>
            {message.emitedByMe === true && (
                <div className="message-me">
                    <div className="msg">
                        <div className="text">{message.message}</div>
                        <div className="info">{message.created_at}</div>
                    </div>
                    <div className="avatar">
                        <img src={message.avatar ? message.avatar : avatar} alt="" />
                    </div>
                </div>

            )}
            {message.emitedByMe === false && (
                <div className="message-others">
                    <div className="avatar">
                        <img src={message.avatar ? message.avatar : avatar} alt="" />
                    </div>
                    <div className="msg">
                        <div className="text">
                            <span>{`${message.name} disse:`}</span> {message.message}</div>
                        <div className="info">{message.created_at}</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Message