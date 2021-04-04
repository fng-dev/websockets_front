import { useState } from 'react';
import send from '../../assets/img/send.svg';
import './ChangeName.scss';

const ChangeName = (props) => {
    const { changeName } = props

    const [name, setName] = useState('');

    const handleSubmit = () => {
        if(name !== '') {
            changeName(name)
        }
    }

    return (
        <div className="container-setup">
            <div className="container">
                <div className="input">
                    <input type="text" value={name} onChange={({target}) => {setName(target.value)}} placeholder="Informe seu nome" />
                </div>
                <div className="control">
                    <img src={send} alt="send" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default ChangeName