import React from 'react'
import avatar from '../../assets/img/avatar.png'
import menu from '../../assets/img/menu.svg'

const Users = (props) => {
    
    const {users} = props

    return (
        <div className="users">
            <div className="title">
                <div>Usuarios</div>
                <div><img src={menu} alt="menu"/></div>
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