import Ws from '@adonisjs/websocket-client';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import MessageContainer from '../../components/MensagesContainer/MensagesContainer';
import Users from '../../components/Users/Users';
import './Chat.scss';


const ws = Ws('ws://localhost:3333')


const Chat = () => {

    const [socket, setSocket] = useState(null)
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        ws.connect()

        const chat = ws.subscribe('chat')

        setSocket(chat)

        chat.on('connected', (data) => {
            setUsers(data.users)
        })

        chat.on('users', (data) => {
            console.log('DEBUG', 'GET USERS')
            setUsers(data)
        })

        chat.on('error', (error) => {
            console.log(error)
        })



        setInterval(() => {
            chat.emit('getUsers')
        }, 5000)

        return () => {
            chat.emit('exit')
            ws.close()
        };
    }, []);

    useEffect(() => {
        if (socket) {
            socket.off('message', () => {
                console.log('unsubscribe')
            })
            socket.on('message', (data) => {
                console.log('DEBUG', 'MESSAGE', data)
                const m = [...messages]
                m.push(data)
                setMessages(m)
            })
        }

    }, [socket, messages]);

    const sendMessage = payload => {
        const m = [...messages]
        const message = {
            message: payload,
            emitedByMe: true,
            created_at: moment().format('HH:mm:ss')
        }
        m.push(message)
        setMessages(m)
        socket.emit('message', message)
    }

    const setName = (payload) => {
        socket.emit('changeName', payload)
    }

    return (
        <div className="container">
            <Users users={users} setName={setName} />
            <MessageContainer
                messages={messages}
                sendMessage={sendMessage}
            />
        </div>
    )
}

export default Chat;