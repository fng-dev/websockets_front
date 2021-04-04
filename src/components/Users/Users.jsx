import React, { useState } from 'react'
import avatar from '../../assets/img/avatar.png'
import menu from '../../assets/img/menu.svg'
import ChangeName from './ChangeName'

const Users = (props) => {
    
    const {users, setName} = props
    const [show, setShow] = useState(false);

    const handleSetName = (value) => {
        setShow(false)
        setName(value)
    }
    return (
        <div className="users">
            {show && (
                <ChangeName changeName={handleSetName} />
            )}
            <div className="title">
                <div>Usuarios</div>
                <div><img src={menu} alt="menu" onClick={() => setShow(true)} /></div>
            </div>
            {
                users && users.map((item, index) => (
                    <div className="user" key={`${index}${item.name}`}>
                        <div className="avatar">
                            <img src={item.avatar ? item.avatar : avatar} alt=""/>
                        </div>
                        <div className="nickname">
                            {item.name}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;